const router = require("express").Router();
const controllers = require("../controllers/replies")


router.get("/:id", controllers.getReplies);
router.get("/reply/:id", controllers.getReply);
router.post("/:commentId", controllers.postReply);

module.exports = router;