const nodemailer = require('nodemailer');
const {GMAIL_ACCOUNT, GMAIL_PASSWORD} = process.env


// Configurar el transporte de correo
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: GMAIL_ACCOUNT, // Reemplaza con tu correo electrónico
    pass: GMAIL_PASSWORD, // Reemplaza con tu contraseña
  },
});



module.exports = transporter;