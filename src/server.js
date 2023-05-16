const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const server = express();

server.use(cookieParser());
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/cars", require("./routes"));

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
