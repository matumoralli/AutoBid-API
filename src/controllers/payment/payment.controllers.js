const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");
const paymentServices = require("../../services/payment");

async function payCar(req, res) {

    
    const data = await paymentServices.createPayLink(req.body)
    
    if (data) response(res, 200,  data );
    else throw new ClientError("Error while trying to make the purchase ", 400);
}

async function webhookMercadoPago(req, res) {
    const data = await paymentServices.setPayment(req)
    if (data) response(res, 200, data );
    else throw new ClientError("Error", 400);
}

async function getPayment(req, res) {
    const data = await paymentServices.fechPayments()
    if (data) response(res, 200, data)
    else throw new ClientError("Error trying to fetch payments", 400)
}

async function buyCredits(req, res) {
    const data = await paymentServices.createCreditsPayment(req)
    if(data) response(res, 200, data)
    else throw new ClientError("Error trying to generate link", 400)
}

async function getPaymentCredits(req, res) {
    const data = await paymentServices.fechCreditsPayment(req)
    if(data) response(res, 200, data);
    else throw new ClientError("Error", 400)
}

async function webhookMercadoPagoCredit(req, res) {
    const data = await paymentServices.setCreditPayment(req);
    if(data) response(res, 200, data);
    else throw new ClientError("error", 400);
}

module.exports = {
    payCar,
    webhookMercadoPago,
    getPayment,
    buyCredits,
    getPaymentCredits,
    webhookMercadoPagoCredit
}