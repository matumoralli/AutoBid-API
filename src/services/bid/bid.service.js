const { Auction, Bid, User } = require("../../database/models");

async function postBid(req) {
  const { userId } = req.params;
  const { auctionId, ammount } = req.body;
  //all info needed.
  const auctionDB = await Auction.findByPk(auctionId, {
    include: { model: Bid },
  });
  const userDB = await User.findByPk(userId);
  console.log(userId);
  const lastBidAmmount =
    auctionDB.Bids[auctionDB.Bids.length - 1]?.dataValues.ammount;
  const diferenceInMilliseconds = auctionDB.endTime - new Date(); //diferencia en milisegundos entre el tiempo de finalizacion de la subasta y el tiempo actual.
  console.log("esete es last Bid", lastBidAmmount);

  try {
    if (diferenceInMilliseconds < 0) {
      return "This auction has finished";
    } else if (diferenceInMilliseconds < 60000) {
      let now = new Date();
      let newEndTime = now.getTime() + 60000;
      auctionDB.endTime = newEndTime;
      auctionDB.save();
    }

    if (!lastBidAmmount && ammount >= auctionDB.minPrice) {
      console.log("primera oferta");
      const bid = await Bid.create({ ammount: ammount });
      bid.setUser(userDB.dataValues.id);
      bid.setAuction(auctionDB.dataValues.id);
      return bid;
    }

    if (lastBidAmmount < 50000) {
      if (ammount >= lastBidAmmount + 100) {
        console.log(lastBidAmmount + 100);
        const bid = await Bid.create({ ammount: ammount });
        bid.setUser(userDB.dataValues.id);
        bid.setAuction(auctionDB.dataValues.id);
        return bid;
      } else {
        return "The bid has to be more than 100 dollars higher than the last one.";
      }
    }

    if (ammount >= lastBidAmmount + 250) {
      const bid = await Bid.create({ ammount: ammount });
      bid.setUser(userDB.dataValues.id);
      bid.setAuction(auctionDB.dataValues.id);
      bid.save();
      return bid;
    } else {
      return "The bid has to be more than 250 dollars higher than the last one.";
    }
  } catch (error) {
    console.log("There were an error creating the bid", error.message);
  }
}

module.exports = { postBid };
