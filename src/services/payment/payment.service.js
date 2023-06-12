const { Auction, CarDetail, Payment, User } = require("../../database/models");
const axios = require("axios");

const { INICIO_AUTOBID, URL_MERCADOPAGO_API, ACCESS_TOKEN_MERCADOPAGO, CURRENT_URL_API } = process.env


async function CreatePayLink({ auctionId, buyerId }) {
  try {
    const auction = await Auction.findByPk(auctionId, {
      include: [{ model: CarDetail, attributes: ['id'] }]
    })
    let car = await CarDetail.findByPk(auction.CarDetail.id)

    car.dataValues.carId = car.dataValues.id
    auction.dataValues.CarDetail = null
    car.dataValues.id = null
    car.dataValues.images = null

    const BodyMercadoPago = {
      items: [ 
        {
          ...auction.dataValues,
          ...car.dataValues,
          quantity: 1,
          unit_price: auction.dataValues.minPrice,
        }
      ],
      back_urls: {
        failure: INICIO_AUTOBID,
        pending: INICIO_AUTOBID,
        success: INICIO_AUTOBID
      },
      auto_return: 'approved',
      Notification_url: `${CURRENT_URL_API}/payment/webhookMP`,
    };

    const payment = await Payment.create({
      buyerUserId: buyerId,
      sellerUserId: auction.dataValues.UserId,
    })
    const carDB = await CarDetail.findByPk(auction.CarDetail.id)
    await payment.setCarDetail(carDB);
  

    BodyMercadoPago.items[0].id = payment.id
    const {data} = await axios.post(URL_MERCADOPAGO_API, BodyMercadoPago, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN_MERCADOPAGO}`
      }
    });

    
    return data.init_point
  } catch (error) {
    console.log("Error trying to send data to Mercado Libre", error)
  }

}

async function SetPayment(req) {
  try {
  
    if (req.query.type === "payment") {
      const info = await axios.get("https://api.mercadopago.com/v1/payments/" + req.query["data.id"], {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN_MERCADOPAGO}`
        }
      });
      const status = info.data.status;
      const transactionAmount = info.data.transaction_amount;

      const payment = await Payment.findByPk(info.data.additional_info.items[0].id);
      payment.state = status;
      payment.transactionAmount = transactionAmount;
      payment.transactionId = req.query["data.id"]
      await payment.save()
      return { ok: "ok" }
    }

     throw new Error("error");
  } catch (error) {
    console.log("Error trying to save free market data in database", error)
  }
}


async function fechPayments(params) {
  try {
    return await Payment.findAll({
      include: CarDetail
    });
  } catch (error) {
    console.log("Error finding payments in DB", error)
  }
}

module.exports = {
  CreatePayLink,
  SetPayment,
  fechPayments
}