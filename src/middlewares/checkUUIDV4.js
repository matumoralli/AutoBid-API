const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { auctionId, userId } = req.params;
  const regExp =
    /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;

  if (auctionId) {
    if (regExp.test(auctionId)) return next();
    else throw new ClientError("Invalid Auction ID", 400);
  }

  if (userId) {
    if (regExp.test(userId)) return next();
    else throw new ClientError("Invalid User ID", 400);
  }

  throw new ClientError("Neccesary ID missing", 400);
};
