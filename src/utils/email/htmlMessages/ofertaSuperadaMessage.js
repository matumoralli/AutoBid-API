
 function ofertaSuperadaMessage(params) {
    return `
    <html>
    <body style="text-align: center; font-family: Arial, Helvetica, sans-serif; margin: 3% 13% 3% 13%;">
    <div >
        <a href="${process.env.INICIO_AUTOBID}" target="_blank">
            <img src="https://i.postimg.cc/nzJt61dB/Logo.png" alt="Imagen" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
        </a>
    </div>
    <br/>
    <br/>
      <h3> Lamentamos avisarte que alguien realizo una oferta mayor a la tuya en la subasta que estas participando. </h3>
      <br/>
      <h3>¡Volvé a ofertar antes de que termine y pierdas el vehículo!</h3>
      <br/>
      <br/>
      <a style="font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 5%; background-color: #ff1616; color: white; padding: 20px;" target="_blank" href=${process.env.INICIO_AUTOBID}>Ir a AutoBid</a>

      </body>
    </html>
    
    `
}

module.exports = ofertaSuperadaMessage