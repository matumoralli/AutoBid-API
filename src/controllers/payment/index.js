const {catchedAsync} = require("../../utils");
const {payCar, webhookMercadoPago, getPayment, buyCredits, getPaymentCredits, webhookMercadoPagoCredit} = require("./payment.controllers");

module.exports = {
    payCar: catchedAsync(payCar),
    webhookMercadoPago: catchedAsync(webhookMercadoPago),
    getPayment: catchedAsync(getPayment),
    buyCredits: catchedAsync(buyCredits),
    getPaymentCredits: catchedAsync(getPaymentCredits),
    webhookMercadoPagoCredit: catchedAsync(webhookMercadoPagoCredit)
}