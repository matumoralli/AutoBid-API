const router = require("express").Router();
const controllers = require("../controllers/cars");
const middlewares = require("../middlewares");

router.get("/", controllers.getCars);

module.exports = router;



