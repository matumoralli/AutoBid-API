const router = require("express").Router();
const controllers = require("../controllers/users");
const middlewares = require("../middlewares");

router.get("/", middlewares.jwtCheckAdmin, controllers.getUsers);
//! La ruta de abajo busca un usuario con el mail en la query, y si no lo encuentra, lo crea. Funciona como GET y POST.
router.post(
  "/user/:email",
  middlewares.postUserValidation,
  controllers.postUser
);
//!
router.put("/ban", middlewares.jwtCheckSuperAdmin, controllers.banUser);

router.post("/populate", controllers.populateDB);

module.exports = router;
