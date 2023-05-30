const router = require("express").Router();
const controllers = require("../controllers/users");
const middlewares = require("../middlewares");

router.get("/", controllers.getUsers);
router.post("/", middlewares.postUserValidation, controllers.postUser);
router.put("/ban", controllers.banUser)
router.post("/populate", controllers.populateDB)

module.exports = router;



