function contestaronPreguntaMessage(params) {
  return `
    <html>
    <body style="text-align: center; font-family: Arial, Helvetica, sans-serif; margin-left: 15%; margin-right: 15%;">
    <div >
        <a href="${process.env.INICIO_AUTOBID}" target="_blank">
            <img src="https://i.postimg.cc/nzJt61dB/Logo.png" alt="Imagen" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
        </a>
    </div>
    <br/>
    <br/>
      <h3>Abonaste un crédito en AutoBid y ya se encuentra valido para que puedas usarlo.</h3>
      <br/>
        <h4>Recordá que este crédito es reembolsable si participas en una subasta y no la ganas, o si simplemente te arrepentís! Podrás solicitar el reembolso desde el sitio web.</h4>
      <br/>
      <h4>Este crédito es válido para una sola subasta a la vez, y en caso de querer participar en varias en simultaneo, deberás abonar un crédito para cada una.</h4>
      <br/>
      <a style="font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 5%; background-color: #ff1616; color: white; padding: 20px;" target="_blank" href=${process.env.INICIO_AUTOBID}>Ir a AutoBid</a>

      </body>
    </html>
    
    `
}

module.exports = contestaronPreguntaMessage