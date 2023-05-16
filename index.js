const server = require("./src/server");
const { conn } = require("./src/db.js");

const PORT = 8000;

conn.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
