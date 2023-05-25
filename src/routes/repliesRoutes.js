const router = require("express").Router();
const controllers = require("../controllers/replies")


router.get("/:id", controllers.getReplies);

module.exports = router;