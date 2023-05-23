const carsServices = require("../../services/cars");
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");


async function getCars(req, res) {
  const cars = await carsServices.list();
  response(res, 200, cars);
}

async function postCar(req, res) {
  const newCar = await carsServices.create(req.body);
  if (newCar) response(res, 201, newCar);
  else throw new ClientError("Error creating car", 400);
}

module.exports = { getCars, postCar };
