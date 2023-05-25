const { CarDetail } = require('../../database/models')

async function fetchCars(){
    try{
        return await CarDetail.findAll()
    } catch (error) {
        console.log("Could not fetch cars from DB", error.message)
    }
}

async function createCarDetail ( {brand, model, year, kilometers, domain, owner, engine, transmission, driveTrain, bodyType, color, highlights, equipement, modifications, knownFlaws, services, addedItems}){
  try{
    return await CarDetail.create({
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
      addedItems
    });
  } catch (error){
    console.log("Could not create the car details", error.message)
  }
}

module.exports = {fetchCars, createCarDetail}