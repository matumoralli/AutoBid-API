const { CreatePayLink, SetPayment, fechPayments } = require("./payment.service");


module.exports = {
    CreatePayLink: async (body) => await CreatePayLink(body),
    SetPayment: async (req) => await SetPayment(req),
    fechPayments: async () => await fechPayments()
}