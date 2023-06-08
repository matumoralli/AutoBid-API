const server = require("./src/server");
const { conn } = require("./src/database/db");
const {
  Auction,
  Comment,
  Reply,
  User,
  Bid,
  CarDetail,
  Credit,
} = require("./src/database/models");

const PORT = 8000;


//User 1 == N CarDetail
User.hasMany(CarDetail);
CarDetail.belongsTo(User);
//User 1 == N credit
User.hasMany(Credit);
Credit.belongsTo(User);
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
Auction.hasOne(CarDetail)
CarDetail.belongsTo(Auction)


//Auctions 1 == N Comments
Auction.hasMany(Comment);
Comment.belongsTo(Auction);
//Auction 1 == N Bid
Auction.hasMany(Bid);
Bid.belongsTo(Auction);
//Auction 1 == N Credit
Auction.hasMany(Credit);
Credit.belongsTo(Auction);

//Comments 1 == N Reply
Comment.hasMany(Reply);
Reply.belongsTo(Comment);



conn.sync({ force: true }).then(() => {

  server.listen(PORT, () => {
    console.log("Server listening at", PORT);
  });
});
