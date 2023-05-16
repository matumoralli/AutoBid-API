const server = require("./src/server")

const PORT = 8000;

server.listen(PORT, ()=>{
  console.log(`API listening on port ${PORT}`)

})