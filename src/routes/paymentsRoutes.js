const router = require("express").Router();
const controllers = require("../controllers/payment")



router.post("/payCar", controllers.payCar);
router.post("/webhookMP", controllers.webhookMercadoPago)
router.get("/", controllers.getPayment)



module.exports = router
