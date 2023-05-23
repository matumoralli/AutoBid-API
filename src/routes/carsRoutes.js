const router = require("express").Router();
const controllers = require("../controllers/cars");
const middlewares = require("../middlewares");
const { requiredScopes } = require('express-oauth2-jwt-bearer');

const checkScopes = requiredScopes('access:admin');

router.get("/", controllers.getCars);

router.post("/", controllers.postCar);

module.exports = router;



