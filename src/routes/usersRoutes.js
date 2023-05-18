const router = require("express").Router();
const controllers = require("../controllers/users");
const middlewares = require("../middlewares");

router.get("/", controllers.getUsers);
router.post("/", middlewares.postUserValidation, controllers.postUser);

module.exports = router;



