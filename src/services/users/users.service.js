const { User } = require("../../database/models");
const { users } = require("../db.json");
const jwt_decode = require("jwt-decode");

async function fetchUsers() {
  try {
    return await User.findAll();
  } catch (error) {
    console.log("Could not fetch Users from DB:", error.message);
  }
}

async function fetchOrCreate(req) {
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
      });
      console.log("este debería ser un admin", user);
      return user;
    } catch (error) {
      console.log("Could not fetch or create User:", error.message);
    }
  } else {
    try {
      const user = await User.findOrCreate({
        where: { name: name, email: email },
      });
      return user;
    } catch (error) {
      console.log("Could not fetch or create User:", error.message);
    }
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

module.exports = { fetchUsers, fetchOrCreate, banUser, populateDB };
