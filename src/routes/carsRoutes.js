const router = require("express").Router();
const controllers = require("../controllers/cars");
const middlewares = require("../middlewares");
//const { requiredScopes } = require('express-oauth2-jwt-bearer');

// const checkScopes = requiredScopes('read:resource_servers');

router.get("/", controllers.getCars);

module.exports = router;
