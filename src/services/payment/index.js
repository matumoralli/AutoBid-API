const { createPayLink, setPayment, fechPayments, createCreditsPayment, fechCreditsPayment, setCreditPayment} = require("./payment.service");


module.exports = {
    createPayLink: async (body) => await createPayLink(body),
    setPayment: async (req) => await setPayment(req),
    fechPayments: async () => await fechPayments(),
    createCreditsPayment: async (req) => await createCreditsPayment(req),
    fechCreditsPayment : async () => await fechCreditsPayment(),
    setCreditPayment: async (req) => await setCreditPayment(req)
}