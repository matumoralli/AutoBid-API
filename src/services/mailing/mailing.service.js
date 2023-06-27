const transporter = require("../../utils/email")
const bienvenidaMessage = require("../../utils/email/htmlMessages/bienvenidaMessage");
const contestaronPreguntaMessage = require("../../utils/email/htmlMessages/contestaronPreguntaMessage")
const creditoAbonado = require("../../utils/email/htmlMessages/creditoAbonadoMessage")
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
    html: bienvenidaMessage(),
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
    html: contestaronPreguntaMessage(),
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
function winnerEmail({sellerName, sellerNum, sellerEmail, email}) {
  const mailOptions = {
    from: process.env.GMAIL_ACCOUNT, 
    to: email,
    subject: "AutoBid",
    html: elGanador({email:sellerEmail, num:sellerNum, name:sellerName}),
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