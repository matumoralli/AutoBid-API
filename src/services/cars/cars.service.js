const { CarDetail, User } = require("../../database/models");
const {
  uploadImage,
  uploadMultipleImages,
  deleteImageByUrl,
} = require("../../utils/cloudinary");
const { cars } = require("../db.json");

async function fetchCars() {
  try {
    return await CarDetail.findAll();
  } catch (error) {
    console.log("Could not fetch cars from DB", error.message);
  }
}

async function createCarDetail(
  {
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
  },
  { image }
) {
  try {
    if (image !== null) {
      images = await uploadImage(image);
    }

    let userDB = await User.findOne({
      where: { email: email },
    });

    let carDB = await CarDetail.findOne({
      where: {
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
      },
    });

    if (!userDB)
      return "There is no user registered in the DB with given email";
    if (carDB) return "There is already a car in the DB with given details";

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

async function createImage({ carId }, { image }) {
  try {
    const car = await CarDetail.findByPk(carId);
    if (car) {
      const urlNewImage = await uploadImage(image);
      car.images = [...car.images, ...urlNewImage];
      await car.save();
      return car;
    }
    throw new Error("car with id " + carId + " not exist");
  } catch (error) {
    console.log("Error trying to save the image", error);
  }
}

async function removeImage({ carId }, { imageUrl }) {
  try {
    const car = await CarDetail.findByPk(carId);
    const deleteFromCloud = await deleteImageByUrl(imageUrl);
    if (deleteFromCloud) {
      let imagenesActuales = car.images;
      imagenesActuales = imagenesActuales.filter((item) => item !== imageUrl);
      car.images = [...imagenesActuales];
      await car.save();
      return car;
    }
  } catch (error) {
    console.log("Error trying to delete the image", error);
  }
}

module.exports = {
  fetchCars,
  createCarDetail,
  populateDB,
  createImage,
  removeImage,
};
