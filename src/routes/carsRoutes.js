const router = require("express").Router();
const controllers = require("../controllers/cars");
const middlewares = require("../middlewares");


router.get("/", controllers.getCars);

router.get("/car/:carId", controllers.getCars);

router.post("/", controllers.postCar);

router.post("/populate", controllers.populateDB);

router.post("/image/:carId", controllers.postImage);

router.delete("/image/:carId", controllers.deleteImage);

module.exports = router;
