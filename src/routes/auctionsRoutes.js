const router = require("express").Router();
const controllers = require("../controllers/auctions")

router.get("/", controllers.getAuctions);

module.exports = router;
