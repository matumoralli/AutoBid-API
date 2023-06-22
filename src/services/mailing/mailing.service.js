const transporter = require("../../utils/email")
const bienvenida = require("../../utils/email/htmlMessages/bienvenida");
const contestaronPregunta = require("../../utils/email/htmlMessages/contestaronPregunta")
const creditoAbonado = require("../../utils/email/htmlMessages/creditoAbonado")
const ofertaSuperada = require("../../utils/email/htmlMessages/ofertaSuperada")
const pagaAuto = require("../../utils/email/htmlMessages/pagaAuto")
const elGanador = require("../../utils/email/htmlMessages/elGanador")
const elVendedor = require("../../utils/email/htmlMessages/elVendedor")


//todos los Emails reciben el corre del usuario 
function welcomeEmail({email}) {

  const mailOptions = {
    from: process.env.GMAIL_ACCOUNT,
    to: email,
    subject: "AutoBid",
    html: bienvenida(),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return 'Error al enviar el correo'
    } else {
      console.log('Correo enviado: ' + info.response);
      return 'Correo enviado correctamente'
    }
});
}

function answeredQuestionEmail({email}) {
  
  
  const mailOptions = {
    from: process.env.GMAIL_ACCOUNT, 
    to: email,
    subject: "AutoBid",
    html: contestaronPregunta(),
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return 'Error al enviar el correo'
    } else {
      console.log('Correo enviado: ' + info.response);
      return 'Correo enviado correctamente'
    }
});
}

function creditPurchasedEmail({email}) {
  const mailOptions = {
    from: process.env.GMAIL_ACCOUNT, 
    to: email,
    subject: "AutoBid",
    html: creditoAbonado(),
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return 'Error al enviar el correo'
    } else {
      console.log('Correo enviado: ' + info.response);
      return 'Correo enviado correctamente'
    }
});
}

function offerExceededEmail({email}) {
  const mailOptions = {
    from: process.env.GMAIL_ACCOUNT, 
    to: email,
    subject: "AutoBid",
    html: ofertaSuperada(),
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return 'Error al enviar el correo'
    } else {
      console.log('Correo enviado: ' + info.response);
      return 'Correo enviado correctamente'
    }
});
}
//recibe el email del usuario y el link de mercadopago
 function payTheCarEmail({link, email}) {
  const mailOptions = {
    from: process.env.GMAIL_ACCOUNT, 
    to: email,
    subject: "AutoBid",
    html: pagaAuto(link),
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return 'Error al enviar el correo'
    } else {
      console.log('Correo enviado: ' + info.response);
      return 'Correo enviado correctamente'
    }
});
}
//recibe el email ademas de los datos del vendedor
function winnerEmail({sellerEmail, sellerNum, sellerEmail, email}) {
  const mailOptions = {
    from: process.env.GMAIL_ACCOUNT, 
    to: email,
    subject: "AutoBid",
    html: elGanador({email:sellerEmail, num:sellerNum, email:sellerEmail}),
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return 'Error al enviar el correo'
    } else {
      console.log('Correo enviado: ' + info.response);
      return 'Correo enviado correctamente'
    }
});
}
//recibe el email ademas de los datos del ganador de la subasta
function auctioneerEmail({buyerName, buyerNum, buyerEmail, email}) {
  const mailOptions = {
    from: process.env.GMAIL_ACCOUNT, 
    to: email,
    subject: "AutoBid",
    html: elVendedor({name:buyerName, num:buyerNum, email:buyerEmail}),
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return 'Error al enviar el correo'
    } else {
      console.log('Correo enviado: ' + info.response);
      return 'Correo enviado correctamente'
    }
});
}




module.exports = {
    welcomeEmail,
    answeredQuestionEmail,
    creditPurchasedEmail,
    offerExceededEmail,
    payTheCarEmail,
    winnerEmail,
    auctioneerEmail
}