const server = require("./src/server");
const { conn } = require("./src/database/db");

const PORT = 8000;


const {Auction, Comment, Reply} = require('./src/database/models');

//Auctions 1 == N Comments
Comment.belongsTo(Auction);
Auction.hasMany(Comment);
//Comments 1 == N Reply 
Comment.hasMany(Reply);
Reply.belongsTo(Comment);

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("Server listening at", PORT);
  });
});
