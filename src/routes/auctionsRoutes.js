const router = require("express").Router();
const controllers = require("../controllers/auctions");
const bids = require("../controllers/bids")
const comment = require("../controllers/comments")
const { jwtCheck } = require("../middlewares");


router.get("/", controllers.getAuctions);
router.get("/:id", controllers.getAuction);
router.put("/:id", controllers.putAuction);
router.post("/bid/:userId", bids.postBid)
router.post("/comment/:userId", comment.postComment)
router.post("/", controllers.postAuction);


module.exports = router;
