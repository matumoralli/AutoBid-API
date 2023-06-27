function contestaronPreguntaMessage(params) {
  return `
    <html>
    <body style="text-align: center; font-family: Arial, Helvetica, sans-serif; margin-left: 15%; margin-right: 15%; padding-botton: 10%;">
    <div>
        <img src="https://i.postimg.cc/nzJt61dB/Logo.png" alt="Imagen"
            style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
    </div>
    <br />
    <br />
    <h2>El vendedor del vehículo por el cual estas interesado respondió tu pregunta. ¡Dirigite al sitio web para ver su
        respuesta y seguir en contacto!</h2>
    <br />
    <a style="font-size: 14px; font-weight: bold; text-decoration: none; border-radius: 5%; background-color: #ff1616; color: white; padding: 20px;" target="_blank" href=${process.env.INICIO_AUTOBID}>Ir a AutoBid</a>
</body>
    </html>
    
    `
}

module.exports = contestaronPreguntaMessage