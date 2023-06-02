const router = require("express").Router();
const controllers = require("../controllers/users");
const middlewares = require("../middlewares");
const { requiredScopes } = require('express-oauth2-jwt-bearer');

// const checkScopes = requiredScopes('read:resource_servers');

router.get("/", controllers.getUsers);
//! La ruta de abajo busca un usuario con el mail en la query, y si no lo encuentra, lo crea. Funciona como GET y POST.
router.post("/:email", middlewares.postUserValidation, controllers.postUser);
//!
router.put("/ban", controllers.banUser)
router.post("/populate", controllers.populateDB)

module.exports = router;



