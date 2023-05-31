const router = require("express").Router();
const controllers = require("../controllers/users");
const middlewares = require("../middlewares");
const { requiredScopes } = require('express-oauth2-jwt-bearer');

// const checkScopes = requiredScopes('read:resource_servers');

router.get("/", controllers.getUsers);
router.post("/", middlewares.postUserValidation, controllers.postUser);
router.put("/ban", controllers.banUser)
router.post("/populate", controllers.populateDB)

module.exports = router;



