const { catchedAsync } = require("../../utils");
const { getCars, getCar, postCar, populateDB, postImage, deleteImage } = require("./cars.controllers");

module.exports = {
  getCars: catchedAsync(getCars),
  getCar: catchedAsync(getCar),
  postCar: catchedAsync(postCar),
  populateDB: catchedAsync(populateDB),
  postImage: catchedAsync(postImage),
  deleteImage: catchedAsync(deleteImage)
};
