export default function bienvenida(params) {
    return`
    <html>
    <body style="text-align: center; font-family: Arial, Helvetica, sans-serif;">
    <div >
    <img src="https://i.postimg.cc/nzJt61dB/Logo.png" alt="Imagen" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
    </div>
    <br/>
    <br/>
      <h3>¡Gracias por unirte a AutoBid! Estamos encantados de tenerte como nuevo miembro de la comunidad. A continuación hay algunos enlaces rápidos para ayudarte a comenzar.</h3>
      <br/>
      <br/>
      <br/>
      <br/>
      <a target="_blank" href=${process.env.INICIO_AUTOBID}>Encontrá el auto perfecto</a>
      <p>Busca el vehículo de tus sueños, entra en nuestro inicio y verás gran cantidad de vehículos, ¡y todos ellos interesantes!</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <a target="_blank" href=${process.env.VENDETUAUTO_AUTOBID}>Vende tu automóvil</a>
      <p>AutoBid es el mejor lugar para vender su vehículo interesante! Es gratis vender, y nuestra gran comunidad de usuarios dará como resultado una venta exitosa. Revisaremos su envío dentro de un día hábil y podemos poner en marcha su subasta rápidamente, ¡generalmente dentro de una semana!</p>
      </body>
    </html>
    `
}