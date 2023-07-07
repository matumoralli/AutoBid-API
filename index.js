const server = require("./src/server");
const { conn } = require("./src/database/db");
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(server);

const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_comment", (data) => {
    console.log(data)
    socket.emit("receive_comment", data);
  });

  socket.on("send_reply", (data) => {
    console.log(data)
    socket.emit("receive_reply", data);
  });

  socket.on("send_bid", (data) => {
    console.log(data)
    socket.emit("receive_bid", data);
  });
});

const PORT = 8000;

conn.sync({ force: false }).then(() => {
  httpServer.listen(PORT, () => {
    console.log("Server listening at", PORT);
  });
});
