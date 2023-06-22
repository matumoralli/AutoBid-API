const { CarDetail, User } = require("../../database/models");
const {
  uploadImage,
  uploadMultipleImages,
  deleteImageByUrl,
  uploadPDF,
} = require("../../utils/cloudinary");
const { cars } = require("../db.json");

async function fetchCars() {
  try {
    return await CarDetail.findAll();
  } catch (error) {
    console.log("Could not fetch cars from DB", error.message);
  }
}

async function fetchCar() {
  const { carId } = req.params;
  try {
    const carDB = await CarDetail.findOne({
      where: { id: carId },
    });
    if (!carDB) throw new Error("Could not find car in DB with given ID:", carId);
    return carDB;
  } catch (error) {
    console.log("Could not fetch car from DB", error.message);
  }
}

async function createCarDetail(
  {
    brand,
    model,
    year,
    kilometers,
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
    images,
    email,
  },
  { domain, inspection, image }
) {
  const arrayHighlights = Array.isArray(highlights) ? highlights : [highlights]
  const arrayEquipement = Array.isArray(equipement) ? equipement : [equipement]
  const arrayModifications = Array.isArray(modifications) ? modifications : [modifications]
  const arrayKnownFlaws = Array.isArray(knownFlaws) ? knownFlaws : [knownFlaws]
  const arrayServices = Array.isArray(services) ? services : [services]
  const arrayAddedItems = Array.isArray(addedItems) ? addedItems : [addedItems]


  try {
    const userDB = await User.findOne({
      where: { email: email },
    });

    if (!userDB) {
      throw new Error("There is no User in DB with given email:", email);
    }

    const carDB = await CarDetail.findOne({
      where: {
        brand: brand,
        model: model,
        year: year,
        owner: owner,
        engine: engine,
        transmission: transmission,
        driveTrain: driveTrain,
        bodyType: bodyType,
      },
    });

    if (carDB) {
      throw new Error("There is already a car in DB with given details");
    }

    if (image !== null) {
      images = await uploadImage(image);
    }
    const domainFileUrl = await uploadPDF(domain)
    const inspectionFileUrl = await uploadPDF(inspection)

    const newCarDetail = await CarDetail.create({
      brand,
      model,
      year,
      kilometers,
      domain : domainFileUrl,
      owner,
      engine,
      transmission,
      driveTrain,
      bodyType,
      color,
      highlights: arrayHighlights,
      equipement: arrayEquipement,
      modifications: arrayModifications,
      knownFlaws: arrayKnownFlaws,
      services: arrayServices,
      addedItems: arrayAddedItems,
      inspection: inspectionFileUrl,
      images,
    });

    return newCarDetail.setUser(userDB.dataValues.id);
  } catch (error) {
    console.log(
      "There has been an error in services trying to create a car:",
      error.message
    );
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
    throw new Error("There is no car in DB with given id:", carId);
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
  fetchCar,
  createCarDetail,
  populateDB,
  createImage,
  removeImage,
};
