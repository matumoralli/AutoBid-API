const { CarDetail, User } = require("../../database/models");
const { cars } = require("../db.json");

async function fetchCars() {
  try {
    return await CarDetail.findAll();
  } catch (error) {
    console.log("Could not fetch cars from DB", error.message);
  }
}

async function createCarDetail({
  brand,
  model,
  year,
  kilometers,
  domain,
  owner,
  engine,
  transmission,
  driveTrain,
  bodyType,
  color,
  highlights,
  equipement,
  modifications,
  knownFlaws,
  services,
  addedItems,
  checked,
  images,
  email,
}) {
  try {
    let userDB = await User.findOne({
      where: { email: email },
    });

    const check = userDB !== null;

    if (check) {
      const newCarDetail = await CarDetail.create({
        brand,
        model,
        year,
        kilometers,
        domain,
        owner,
        engine,
        transmission,
        driveTrain,
        bodyType,
        color,
        highlights,
        equipement,
        modifications,
        knownFlaws,
        services,
        addedItems,
        checked,
        images,
      });

      return newCarDetail.setUser(userDB.dataValues.id);
    }
  } catch (error) {
    console.log("Could not create the car details", error.message);
  }
}

async function populateDB() {
  try {
    const carsArray = [];
    cars.forEach((car) => {
      const { id, ...rest } = car;
      const newCar = { ...rest };
      carsArray.push(newCar);
    });

    return await CarDetail.bulkCreate(carsArray);
  } catch (error) {
    console.log("Could not bulk create cars database from JSON", error.message);
  }
}

module.exports = { fetchCars, createCarDetail, populateDB };
