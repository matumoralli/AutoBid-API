const Cars = require("../data/cars");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const cars = await Cars.list();
  response(res, 200, cars);
};
