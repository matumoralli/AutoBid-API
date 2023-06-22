const {INICIO_AUTOBID} = process.env

export default function ofertaSuperada(params) {
    return `
    <html>
    <body style="text-align: center;">
    <div >
    <img src="https://i.postimg.cc/nzJt61dB/Logo.png" alt="Imagen" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
    </div>
    <br/>
    <br/>
      <h3> Lamentamos avisarte que alguien realizo una oferta mayor a la tuya en la subasta que estas participando. ¡Volvé a ofertar antes de que termine y pierdas el vehículo!</h3>
      <br/>
      <br/>
      <a href=${INICIO_AUTOBID}>AutoBid</a>
      </body>
    </html>
    
    `
}