const router = require("express").Router();
const controllers = require("../controllers/replies")


router.get("/:id", controllers.getReplies);
router.post("/:commentId", controllers.postReply);

module.exports = router;