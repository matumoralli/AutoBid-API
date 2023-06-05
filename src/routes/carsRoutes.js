const router = require("express").Router();
const controllers = require("../controllers/cars");
const middlewares = require("../middlewares");
//const { requiredScopes } = require('express-oauth2-jwt-bearer');

// const checkScopes = requiredScopes('read:resource_servers');

router.get("/", controllers.getCars);

router.post("/", controllers.postCar);

router.post("/populate", controllers.populateDB);

router.post("/image/:carId", controllers.postImage);

router.delete("/image/:carId", controllers.deleteImage);

module.exports = router;
