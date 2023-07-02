require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: 5432,
  dialect: "postgres",
  //logging: (...msg) => console.log(msg),
});

// async function test () {
//   sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//   }).catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
// }

// test()


// const {Auction, Bid, CarDetail, Comment, Reply, User} = sequelize.models




// Auction.belongsTo(User);
// Auction.hasMany(Comment);
// Auction.hasOne(CarDetail);
// Auction.hasMany(Bid);
// Bid.belongsTo(User);
// Bid.belongsTo(Auction);
// Comment.belongsTo(Auction);
// Comment.belongsTo(User);
// Comment.hasMany(Reply);
// CarDetail.belongsTo(Auction);
// CarDetail.belongsTo(User)
// Reply.belongsTo(Comment);
// Reply.belongsTo(User);
// User.hasMany(Bid);
// User.hasMany(Comment);
// User.hasMany(Reply);
// User.hasMany(Auction);
// User.hasMany(CarDetail);


module.exports = {
  conn: sequelize,
};
