const router = require("express").Router();
const controllers = require("../controllers/payment")


router.get("/", controllers.getPayment);
router.get("/creditsPayments", controllers.getPaymentCredits)
router.post("/buyCredit", controllers.buyCredits)
router.post("/payCar", controllers.payCar);
router.post("/webhookMP", controllers.webhookMercadoPago);
router.post("/webhookMPCredit", controllers.webhookMercadoPagoCredit)


module.exports = router
