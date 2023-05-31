const router = require("express").Router();
const controllers = require("../controllers/cars");
const middlewares = require("../middlewares");


router.get("/", controllers.getCars);

router.post("/", controllers.postCar);

router.post("/populate", controllers.populateDB);

module.exports = router;
