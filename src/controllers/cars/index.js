const { catchedAsync } = require("../../utils");
const { getCars, postCar, populateDB, postImage, deleteImage } = require("./cars.controllers");

module.exports = {
  getCars: catchedAsync(getCars),
  postCar: catchedAsync(postCar),
  populateDB: catchedAsync(populateDB),
  postImage: catchedAsync(postImage),
  deleteImage: catchedAsync(deleteImage)
};
