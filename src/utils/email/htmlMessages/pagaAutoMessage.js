function pagaAutoMessage(link) {
    return `
    <html>
    <body style="text-align: center; font-family: Arial, Helvetica, sans-serif;">
    <div >
        <a href="${process.env.INICIO_AUTOBID}" target="_blank">
            <img src="https://i.postimg.cc/nzJt61dB/Logo.png" alt="Imagen" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
        </a>
    </div>
    <br/>
    <br/>
      <h2>!Felicidades!</h2>
      <br/>
      <h3>Tu oferta fue la ganadora de la subasta en la que estás participando.</h3>
      <h3>Ingresa al siguiente link para pagar el monto acordado y recibir los datos del vendedor.</h3>
      <br/>
      <br/>
      <a href=${link} target="_blank">${link}</a>
      <br/>
      </body>
    </html>
    `
}

module.exports = pagaAutoMessage