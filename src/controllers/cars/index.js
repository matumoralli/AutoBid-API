const { catchedAsync } = require("../../utils");
const { getCars, getCar, postCar, updateCar, populateDB, postImage, deleteImage } = require("./cars.controllers");

module.exports = {
  getCars: catchedAsync(getCars),
  getCar: catchedAsync(getCar),
  postCar: catchedAsync(postCar),
  updateCar: catchedAsync(updateCar),
  populateDB: catchedAsync(populateDB),
  postImage: catchedAsync(postImage),
  deleteImage: catchedAsync(deleteImage)
};
