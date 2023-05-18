const carsServices = require("../../services/cars");
const { response } = require("../../utils");

async function getCars(req, res) {
  const cars = await carsServices.list();
  response(res, 200, cars);
}

module.exports = { getCars };
