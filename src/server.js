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
  tempFileDir: './src/uploads'
}))

server.use("/api/cars", require("./routes/carsRoutes"));
server.use("/api/users", require("./routes/usersRoutes"));
server.use("/api/auctions", require("./routes/auctionsRoutes"));
server.use("/api/replies", require("./routes/repliesRoutes"));
server.use("/api/comments", require("./routes/commentsRoutes"));
server.use("/api/payment", require("./routes/paymentsRoutes"))

server.use("*", (req, res) => {
  res.status(404).send({
    error: true,
    message: "Requested route not found",
  });
});


server.use((err, req, res, next) => {
  console.log(`Status code ${err.statusCode || 500}:`, err.message)
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
