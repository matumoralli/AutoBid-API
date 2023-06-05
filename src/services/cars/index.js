// const cars = require("./cars.json");
const { createCarDetail, fetchCars, populateDB, createImage, removeImage} = require("./cars.service");


//This json is going to be replaced with an API later. However, the rest of the service will remain the same, as this functions mimics the actual functioning of an API.

module.exports = {
  list: async () => await fetchCars(),
  create: async (body, files) => await createCarDetail(body, files),
  populateDB: async () => await populateDB(),
  createImage: async (params,files) => await createImage(params, files),
  removeImage: async (params, body ) => await removeImage(params, body)
};
