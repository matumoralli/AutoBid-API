const router = require("express").Router();
const controllers = require("../controllers/payment");
const middlewares = require("../middlewares");

router.get("/", controllers.getPayment);
router.get(
  "/creditsPayments",
  middlewares.jwtCheckUser,
  controllers.getPaymentCredits
);
router.post("/buyCredit", middlewares.jwtCheckUser, controllers.buyCredits);
router.post("/payCar", middlewares.jwtCheckUser, controllers.payCar);
router.post(
  "/webhookMP",
  middlewares.jwtCheckUser,
  controllers.webhookMercadoPago
);
router.post(
  "/webhookMPCredit",
  middlewares.jwtCheckUser,
  controllers.webhookMercadoPagoCredit
);

module.exports = router;
