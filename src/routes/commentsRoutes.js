const router = require("express").Router();
const comment = require("../controllers/comments")

router.get("/:commentId", comment.getComment)

module.exports = router;