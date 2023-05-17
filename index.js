const server = require("./src/server");
const {conn} = require("./src/db");

const PORT = 8000;

conn.sync().then(() => {
  server.listen(PORT, () => {
    console.log('Server listening at', PORT); 
  });
});