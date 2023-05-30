const router = require("express").Router();
const controllers = require("../controllers/auctions")

router.get("/", controllers.getAuctions);
router.post("/", controllers.postAuction);

module.exports = router;
