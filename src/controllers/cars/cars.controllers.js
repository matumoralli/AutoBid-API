const carsServices = require("../../services/cars");
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");

async function getCars(req, res) {
  const cars = await carsServices.list();
  if (cars) return response(res, 200, cars);
  else throw new ClientError("No cars found", 404);
}

async function getCar(req, res) {
  const car = await carsServices.fetch(req);
  if (car) return response(res, 200, car);
  else throw new ClientError("Car not found", 404);
}

async function postCar(req, res) {
  const newCar = await carsServices.create(req);
  if (newCar) response(res, 201, newCar);
  else throw new ClientError("Error creating car", 400);
}

async function updateCar(req, res) {
  const updatedCar = await carsServices.update(req);
  if (updatedCar) response(res, 200, updatedCar);
  else throw new ClientError("Error updating car", 400);
}

async function populateDB(req, res) {
  const newCars = await carsServices.populateDB();
  if (newCars) response(res, 201, newCars);
  else throw new ClientError("Error populating DB", 400);
}

async function postImage(req, res) {
  const images = await carsServices.createImage(req.params, req.files);
  if (images) response(res, 201, images);
  else throw new ClientError("Error creating image", 400);
}

async function deleteImage(req, res) {
  const deletedImage = await carsServices.removeImage(req.params, req.body);
  if (deletedImage) response(res, 201, deletedImage);
  else throw new ClientError("Error deleting image");
}

module.exports = { getCars, getCar, postCar, updateCar, populateDB, postImage, deleteImage };
