const transporter = require("../../utils/email")
const bienvenidaMessage = require("../../utils/email/htmlMessages/bienvenidaMessage");
const contestaronPreguntaMessage = require("../../utils/email/htmlMessages/contestaronPreguntaMessage")
const creditoAbonadoMessage = require("../../utils/email/htmlMessages/creditoAbonadoMessage")
const ofertaSuperadaMessage = require("../../utils/email/htmlMessages/ofertaSuperadaMessage")
const pagaAutoMessage = require("../../utils/email/htmlMessages/pagaAutoMessage")
const elGanadorMessage = require("../../utils/email/htmlMessages/elGanadorMessage")
const elVendedorMessage = require("../../utils/email/htmlMessages/elVendedorMessage")


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
    html: creditoAbonadoMessage(),
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
    html: ofertaSuperadaMessage(),
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
    html: pagaAutoMessage(link),
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
    html: elGanadorMessage({email:sellerEmail, num:sellerNum, name:sellerName}),
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
    html: elVendedorMessage({name:buyerName, num:buyerNum, email:buyerEmail}),
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