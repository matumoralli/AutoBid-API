require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");


const server = express();

server.use(cookieParser());
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './uploads'
}))

server.use("/cars", require("./routes/carsRoutes"));
server.use("/users", require("./routes/usersRoutes"));
server.use("/auctions", require("./routes/auctionsRoutes"));
server.use("/replies", require("./routes/repliesRoutes"));
server.use("/comments", require("./routes/commentsRoutes"));

server.use("*", (req, res) => {
  res.status(404).send({
    error: true,
    message: "Not Found",
  });
});


server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
