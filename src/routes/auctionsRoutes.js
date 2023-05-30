const router = require("express").Router();
const controllers = require("../controllers/auctions")

router.get("/", controllers.getAuctions);
router.get("/:id", controllers.getAuction)
router.put("/:id", controllers.putAuction)
router.post("/", controllers.postAuction);


module.exports = router;
