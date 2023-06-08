const router = require("express").Router();
const controllers = require("../controllers/auctions");
const bids = require("../controllers/bids")
const { jwtCheck } = require("../middlewares");


router.get("/", controllers.getAuctions);
router.get("/:id", controllers.getAuction);
router.put("/:id", controllers.putAuction);
router.post("/bid/:id", bids.postBid)
router.post("/", controllers.postAuction);


module.exports = router;
