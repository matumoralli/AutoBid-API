const server = require("./src/server");
const { conn } = require("./src/database/db");
const {
  Auction,
  Comment,
  Reply,
  User,
  Bid,
  CarDetail,
} = require("./src/database/models");

const PORT = 8000;

//User 1 == N CarDetail
User.hasMany(CarDetail);
CarDetail.belongsTo(User);
//User 1 == N Auction
User.hasMany(Auction);
Auction.belongsTo(User);
//User 1 == 1 Bid
User.hasMany(Bid);
Bid.belongsTo(User);
//User 1 == N Reply
User.hasMany(Reply);
Reply.belongsTo(User);
//User 1 == N Comments
User.hasMany(Comment);
Comment.belongsTo(User);

//CardDetails 1 == 1 Auction
CarDetail.belongsTo(Auction);
Auction.hasOne(CarDetail);

//Auctions 1 == N Comments
Auction.hasMany(Comment);
Comment.belongsTo(Auction);
//Auction 1 == N Bib
Auction.hasMany(Bid);
Bid.belongsTo(Auction);

//Comments 1 == N Reply
Comment.hasMany(Reply);
Reply.belongsTo(Comment);

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("Server listening at", PORT);
  });
});
