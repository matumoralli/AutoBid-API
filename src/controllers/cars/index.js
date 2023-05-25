const { catchedAsync } = require("../../utils");
const { getCars, postCar } = require("./cars.controllers");

module.exports = {
  getCars: catchedAsync(getCars),
  postCar: catchedAsync(postCar)
};
