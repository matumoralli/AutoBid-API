const {catchedAsync} = require("../../utils");
const {payCar} = require("./payment.controllers");

module.exports = {
    payCar: catchedAsync(payCar)
}