const {
  Auction,
  CarDetail,
  Payment,
  User,
  PaymentCredit,
} = require("../../database/models");
const axios = require("axios");

const {
  INICIO_AUTOBID,
  URL_MERCADOPAGO_API,
  ACCESS_TOKEN_MERCADOPAGO,
  CURRENT_URL_API,
  URL_WEBHOOK_MERCADOPAGO,
  PRECIO_POR_CREDITO,
} = process.env;

async function fechPayments(params) {
  try {
    return await Payment.findAll({
      include: CarDetail,
    });
  } catch (error) {
    console.log("Error finding payments in DB", error);
  }
}

async function fechCreditsPayment() {
  console.log("se entro al service");
  try {
    return await PaymentCredit.findAll({
      include: User,
    });
  } catch (error) {
    console.log("Error finding credits payments in DB", error);
  }
}

async function createPayLink({ auctionId, buyerId }) {
  try {
    const auction = await Auction.findByPk(auctionId, {
      include: [{ model: CarDetail, attributes: ["id"] }],
    });
    let car = await CarDetail.findByPk(auction.CarDetail.id);
    const carFull = car;
    car.dataValues.carId = car.dataValues.id;
    auction.dataValues.CarDetail = null;
    car.dataValues.id = null;

    const buyer = await User.findByPk(buyerId);
    console.log(car.dataValues.images[0]);
    const BodyMercadoPago = {
      items: [
        {
          ...auction.dataValues,
          ...car.dataValues,
          quantity: 1,
          unit_price: auction.dataValues.minPrice,
          title:
            car.dataValues.brand +
            " " +
            car.dataValues.model +
            ". Subasta ganada por " +
            buyer.dataValues.name +
            ". AUTOBID",
          picture_url: car.dataValues.images[0],
          description: "AutoBid",
          currency_id: "ARS",
        },
      ],
      back_urls: {
        failure: INICIO_AUTOBID,
        pending: INICIO_AUTOBID,
        success: INICIO_AUTOBID,
      },
      auto_return: "approved",
      Notification_url: `${CURRENT_URL_API}/payment/webhookMP`,
    };

    const payment = await Payment.create({
      buyerUserId: buyerId,
      sellerUserId: auction.dataValues.UserId,
    });

    await payment.setCarDetail(carFull);

    BodyMercadoPago.items[0].id = payment.id;
    const { data } = await axios.post(URL_MERCADOPAGO_API, BodyMercadoPago, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN_MERCADOPAGO}`,
      },
    });

    return data.init_point;
  } catch (error) {
    console.log("Error trying to send data to Mercado Libre", error);
  }
}

async function setPayment(req) {
  try {
    //se pregunta si la peticion en de tipo payment
    if (req.query.type === "payment") {
      //se hace peticion a la api de mercado pago para obtener los datos de la transaccion
      const info = await axios.get(
        URL_WEBHOOK_MERCADOPAGO + req.query["data.id"],
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN_MERCADOPAGO}`,
          },
        }
      );
      //se buscan los datos para actualizar la transaccion
      const status = info.data.status;
      const transactionAmount = info.data.transaction_amount;
      //se busca el la transaccion
      const payment = await PaymentCredit.findByPk(
        info.data.additional_info.items[0].id
      );
      //se actualiza la transaccion
      payment.state = status;
      payment.transactionAmount = transactionAmount;
      payment.transactionId = req.query["data.id"];
      await payment.save();
      return { ok: "ok" };
    }

    throw new Error("error");
  } catch (error) {
    console.log("Error trying to save free market data in database", error);
  }
}

async function createCreditsPayment({ body }) {
  //se crea el credito para poder enviarle el id a mercado pago y para que en el webkook se encuentre el credito
  const paymentCredit = await PaymentCredit.create();
  await paymentCredit.setUser(body.buyerId);

  //se crear el objeto que se enviara por body a mercado pago
  const BodyMercadoPago = {
    items: [
      {
        quantity: 1,
        unit_price: parseInt(PRECIO_POR_CREDITO),
        title: "Crédito",
        description: "Crédito en AutoBid",
        currency_id: "ARS",
        id: paymentCredit.dataValues.id,
      },
    ],
    back_urls: {
      failure: INICIO_AUTOBID,
      pending: INICIO_AUTOBID,
      success: INICIO_AUTOBID,
    },
    auto_return: "approved",
    Notification_url: `${CURRENT_URL_API}/payment/webhookMPCredit`,
  };

  //se hace la peticion a la api de mercado pago para generar el link de pago
  const { data } = await axios.post(URL_MERCADOPAGO_API, BodyMercadoPago, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN_MERCADOPAGO}`,
    },
  });

  return data.init_point;
}

async function setCreditPayment(req) {
  try {
    if (req.query.type === "payment") {
      const info = await axios.get(
        URL_WEBHOOK_MERCADOPAGO + req.query["data.id"],
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN_MERCADOPAGO}`,
          },
        }
      );
      const status = info.data.status;
      const transactionAmount = info.data.transaction_amount;

      const paymentCredit = await PaymentCredit.findByPk(
        info.data.additional_info.items[0].id
      );
      paymentCredit.state = status;
      paymentCredit.transactionAmount = transactionAmount;
      paymentCredit.transactionId = req.query["data.id"];
      await paymentCredit.save();
      return { ok: "ok" };
    }

    throw Error("error");
  } catch (error) {
    console.log("Error trying to save free market data in database", error);
  }
}

module.exports = {
  createPayLink,
  setPayment,
  setCreditPayment,
  fechPayments,
  createCreditsPayment,
  fechCreditsPayment,
};
