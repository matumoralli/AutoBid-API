const router = require("express").Router();
const controllers = require("../controllers/payment")



router.post("/payCar", controllers.payCar)



module.exports = router
