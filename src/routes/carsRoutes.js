const router = require("express").Router();
const controllers = require("../controllers/cars");
const middlewares = require("../middlewares");
const { auth } = require('express-oauth2-jwt-bearer');
const { AUDIENCE, ISSUER_BASE_URL } = process.env;

const jwtCheck = auth({
  audience: AUDIENCE,
  issuerBaseURL: ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});


router.get("/", middlewares.jwtCheck, controllers.getCars);

module.exports = router;



