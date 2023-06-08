const { Auction, CarDetail } = require("../../database/models");


const {INICIO_AUTOBID , URL_MERCADOPAGO_API, ACCESS_TOKEN_MERCADOPAGO} = process.env


async function CreatePayLink({auctionId, buyerId}) {
    //no terminado
    try {
        const auction = await Auction.findByPk(auctionId, {
          include: {
            model: CarDetail
          }
        })
        const BodyMercadoPago = {
            items: [
              {
                ...auction,
                quantity: 1,
                unit_price: auction.minPrice
              }
            ],
            back_urls: {
              failure: INICIO_AUTOBID,
              pending: INICIO_AUTOBID,
              success: INICIO_AUTOBID
            },
            auto_return: 'approved',
            // Notification_url: INICIO_AUTOBID,
          };


          const payment = await axios.post(URL_MERCADOPAGO_API, BodyMercadoPago, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${ACCESS_TOKEN_MERCADOPAGO}`
            }
          });

        return payment
    } catch (error) {
        console.log("Error trying to send data to Mercado Libre", error)
    }

}

module.exports = {
    CreatePayLink
}