const { catchedAsync } = require("../../utils");
const { getCars, postCar, populateDB } = require("./cars.controllers");

module.exports = {
  getCars: catchedAsync(getCars),
  postCar: catchedAsync(postCar),
  populateDB: catchedAsync(populateDB),
};
