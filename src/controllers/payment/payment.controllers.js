const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");
const paymentServices = require("../../services/payment");

async function payCar(req, res) {

    
    const data = await paymentServices.CreatePayLink(req.body)
    
    if (data) response(res, 200,  data );
    else throw new ClientError("Error while trying to make the purchase ", 400);
}



module.exports = {
    payCar
}