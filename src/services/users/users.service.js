const { User, Credit, Auction } = require("../../database/models");
const { users } = require("../db.json");

async function fetchUsers() {
  try {
    const usersDB = User.findAll({
      include: {
        model: Credit,
        attributes: ["id", "AuctionId"],
      },
    });
    return usersDB;
  } catch (error) {
    console.log("Could not fetch Users from DB:", error.message);
  }
}

async function fetchOrCreate(req) {
  const jwt_decode = require("jwt-decode");
  const { authorization } = req.headers;
  const { email } = req.params;
  const { name } = req.body;
  const authorizationArray = jwt_decode(authorization).permissions;
  const check = authorizationArray.includes("update:users");
  if (check) {
    try {
      const user = await User.findOrCreate({
        where: { name: name, email: email },
        defaults: { isAdmin: true },
        include: {
          model: Credit,
          attributes: ["id", "AuctionId"],
        },
      });
      return user;
    } catch (error) {
      console.log("Could not fetch or create User:", error.message);
    }
  } else {
    try {
      const user = await User.findOrCreate({
        where: { name: name, email: email },
        include: {
          model: Credit,
          attributes: ["id", "AuctionId"],
        },
      });
      return user;
    } catch (error) {
      console.log("Could not fetch or create User:", error.message);
    }
  }
}

async function giveUserCredit(req) {
  const { email } = req.params;
  try {
    const user = await User.findOne({
      where: { email: email },
    });
    if (user) {
      const newCredit = await Credit.create();
      return newCredit.setUser(user.dataValues.id);
    }
    throw new Error("User not found");
  } catch (error) {
    console.log("Could not give credit to user:", error.message);
  }
}

async function deleteUserCredit(req) {
  const { email } = req.params;
  try {
    const user = await User.findOne({
      where: { email: email },
    });
    if (user) {
      const creditToDelete = await Credit.findOne({
        where: { UserId: user.dataValues.id, AuctionId: null },
      });
      if (!creditToDelete)
        throw new Error(
          "No available credit to delete. Remove a credit from an auction first."
        );

      const creditDeleted = creditToDelete;

      creditToDelete.destroy();

      return creditDeleted;
    }
    throw new Error("User not found");
  } catch (error) {
    console.log("Could not delete credit from user:", error.message);
  }
}

async function assignAuctionCredit(req) {
  const { email, auctionId } = req.params;
  try {
    const auctionDB = await Auction.findByPk(auctionId);
    if (!auctionDB) throw new Error("Auction not found in DB");

    const userDB = await User.findOne({
      where: { email: email },
    });
    if (!userDB) throw new Error("User not found in DB");

    const creditAssignedDB = await Credit.findOne({
      where: { UserId: userDB.dataValues.id, AuctionId: auctionId },
    });
    if (creditAssignedDB)
      throw new Error("The user already has a credit assigned to the auction");

    const creditToAssign = await Credit.findOne({
      where: { UserId: userDB.dataValues.id, AuctionId: null },
    });
    if (!creditToAssign) throw new Error("No available credit to assign");

    return creditToAssign.setAuction(auctionDB.dataValues.id);
  } catch (error) {
    console.log("Could not assign auction to credit:", error.message);
  }
}

async function removeAuctionCredit(req) {
  const { email, auctionId } = req.params;
  try {
    const auctionDB = await Auction.findByPk(auctionId);
    if (!auctionDB) throw new Error("Auction not found in DB");

    const userDB = await User.findOne({
      where: { email: email },
    });
    if (!userDB) throw new Error("User not found in DB");

    const creditToRemove = await Credit.findOne({
      where: { UserId: userDB.dataValues.id, AuctionId: auctionId },
    });
    if (!creditToRemove) throw new Error("No available credit to remove");

    return creditToRemove.setAuction(null);
  } catch (error) {
    console.log("Could not remove auction to credit:", error.message);
  }
}

async function banUser(req) {
  try {
    const user = await User.findByPk(req); //llega
    if (user && !user.isAdmin) {
      if (user.isActive) {
        user.isActive = false;
        user.save();
        return user;
      } else if (!user.isActive) {
        user.isActive = true;
        user.save();
        return user;
      }
    } else if (user && user.isAdmin) {
      console.log("Can't ban an admin.");
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function populateDB() {
  try {
    console.log("llegamos a populateDB");
    const usersArray = [];
    users.forEach((user) => {
      const { id, ...rest } = user;
      const newUser = { ...rest };
      usersArray.push(newUser);
    });

    return await User.bulkCreate(usersArray);
  } catch (error) {
    console.log(
      "Could not bulk create users database from JSON",
      error.message
    );
  }
}

module.exports = {
  fetchUsers,
  fetchOrCreate,
  giveUserCredit,
  deleteUserCredit,
  assignAuctionCredit,
  removeAuctionCredit,
  banUser,
  populateDB,
};
