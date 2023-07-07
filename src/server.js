require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const {
  Auction,
  Comment,
  Reply,
  User,
  Bid,
  CarDetail,
  Payment,
  Credit,
  PaymentCredit,
} = require("./database/models");

const server = express();

server.use(cookieParser());
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./src/uploads",
  })
);

server.use("/api/cars", require("./routes/carsRoutes"));
server.use("/api/users", require("./routes/usersRoutes"));
server.use("/api/auctions", require("./routes/auctionsRoutes"));
server.use("/api/replies", require("./routes/repliesRoutes"));
server.use("/api/comments", require("./routes/commentsRoutes"));
server.use("/api/payment", require("./routes/paymentsRoutes"));

server.use("*", (req, res) => {
  res.status(404).send({
    error: true,
    message: "Requested route not found",
  });
});

server.use((err, req, res, next) => {
  console.log(`Status code ${err.statusCode || 500}:`, err.message);
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

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
Auction.hasOne(CarDetail);
CarDetail.belongsTo(Auction);

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

//Payment 1 == N User
Payment.belongsTo(User, { as: "buyer", foreignKey: "buyerUserId" });
Payment.belongsTo(User, { as: "seller", foreignKey: "sellerUserId" });
User.hasMany(Payment);

//Payment 1 == 1 CardDetails
CarDetail.hasOne(Payment);
Payment.belongsTo(CarDetail);

PaymentCredit.hasOne(User);
User.belongsTo(PaymentCredit);

module.exports = server;
