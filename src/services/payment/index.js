const { CreatePayLink } = require("./payment.service");


module.exports = {
    CreatePayLink: async (body) => await CreatePayLink(body)
}