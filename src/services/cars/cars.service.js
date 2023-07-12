const { CarDetail, User, Auction } = require("../../database/models");
const fs = require("fs");
const {
  uploadImage,
  deleteImageByUrl,
  uploadPDF,
} = require("../../utils/cloudinary");
const { cars } = require("../db.json");

async function fetchCars() {
  try {
    return await CarDetail.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "email"],
        },
        {
          model: Auction,
        },
      ],
    });
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
    if (!carDB)
      throw new Error("Could not find car in DB with given ID:", carId);
    return carDB;
  } catch (error) {
    console.log("Could not fetch car from DB", error.message);
  }
}

async function createCarDetail(carDetailJSON, { domain, inspection, images }) {
  console.log(carDetailJSON);
  let carDetail = JSON.parse(carDetailJSON);
  const {
    brand,
    model,
    year,
    minPrice,
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
    email,
  } = carDetail;

  // console.log(req.body);

  // const { images, domain, inspection } = formData;

  console.log("images", images, "domain", domain, "inspection", inspection);

  const arrayHighlights = Array.isArray(highlights) ? highlights : [highlights];
  const arrayEquipement = Array.isArray(equipement) ? equipement : [equipement];
  const arrayModifications = Array.isArray(modifications)
    ? modifications
    : [modifications];
  const arrayKnownFlaws = Array.isArray(knownFlaws) ? knownFlaws : [knownFlaws];
  const arrayServices = Array.isArray(services) ? services : [services];
  const arrayAddedItems = Array.isArray(addedItems) ? addedItems : [addedItems];

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

    const uploadedImages = await uploadImage(images);
    const domainFileUrl = await uploadPDF(domain);
    const inspectionFileUrl = await uploadPDF(inspection);

    const newCarDetail = await CarDetail.create({
      brand,
      model,
      year,
      minPrice,
      kilometers,
      domain: domainFileUrl,
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
      images: uploadedImages,
    });

    return newCarDetail.setUser(userDB.dataValues.id);
  } catch (error) {
    console.log(
      "There has been an error in services trying to create a car:",
      error.message
    );
  }
}

async function updateCarDetail(carDetailJSON, files = null) {
  console.log(carDetailJSON);
  let carDetail = JSON.parse(carDetailJSON);
  const {
    brand,
    model,
    year,
    minPrice,
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
    UserId,
    inspection: inspectionURL,
    domain: domainURL,
    images: imagesURL,
    id: carDetailId,
  } = carDetail;

  const arrayHighlights = Array.isArray(highlights) ? highlights : [highlights];
  const arrayEquipement = Array.isArray(equipement) ? equipement : [equipement];
  const arrayModifications = Array.isArray(modifications)
    ? modifications
    : [modifications];
  const arrayKnownFlaws = Array.isArray(knownFlaws) ? knownFlaws : [knownFlaws];
  const arrayServices = Array.isArray(services) ? services : [services];
  const arrayAddedItems = Array.isArray(addedItems) ? addedItems : [addedItems];

  try {
    const userDB = await User.findOne({
      where: { id: UserId },
    });

    if (!userDB) {
      throw new Error("There is no User in DB with given email:", email);
    }

    // console.log("imagesURL", imagesURL);
    
    const imagesURLclean = imagesURL.filter(
      (image) => typeof image === "string"
    );

    // console.log("imagesURLclean", imagesURLclean);

    const uploadedImages = files?.images && (await uploadImage(files.images));

    // console.log("uploadedImages", uploadedImages);

    const newImages = uploadedImages
      ? [...imagesURLclean, ...uploadedImages]
      : imagesURLclean;

    // console.log("newImages", newImages);

    const domainFileUrl = files?.domain
      ? await uploadPDF(files.domain)
      : domainURL;

    const inspectionFileUrl = files?.inspection
      ? await uploadPDF(files.inspection)
      : inspectionURL;

    const updatedCarDetail = await CarDetail.update(
      {
        brand,
        model,
        year,
        minPrice,
        kilometers,
        domain: domainFileUrl,
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
        images: newImages,
      },
      {
        where: {
          id: carDetailId,
        },
      }
    );

    return updatedCarDetail;
  } catch (error) {
    console.log(
      "There has been an error in services trying to update a car:",
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

//! 'image' can be an array of images, as long as they all have the same "image" key name.
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
  updateCarDetail,
  populateDB,
  createImage,
  removeImage,
};
