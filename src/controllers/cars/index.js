const { catchedAsync } = require("../../utils");
const { getCars } = require("./cars.controllers");

module.exports = {
  getCars: catchedAsync(getCars),
};
