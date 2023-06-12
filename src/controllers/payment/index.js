const {catchedAsync} = require("../../utils");
const {payCar, webhookMercadoPago, getPayment} = require("./payment.controllers");

module.exports = {
    payCar: catchedAsync(payCar),
    webhookMercadoPago: catchedAsync(webhookMercadoPago),
    getPayment: catchedAsync(getPayment)
}