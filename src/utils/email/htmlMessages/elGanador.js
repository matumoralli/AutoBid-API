export default function elGanador({name, email, num}) {


    return `
    <html>
    <body style="text-align: center; margin: 3%; font-family: Arial, Helvetica, sans-serif;">
    <div >
    <img src="https://i.postimg.cc/mZyTDftj/Logo.png" alt="Imagen" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
    </div>
    <br/>
    <br/>
      <h1>¡Felicitaciones! El Auto es tuyo.</h1>
      
      <h2>Por favor contáctate con el vendedor del vehículo.</h2>
      
      <h3 style="text-align: left;">Nombre: ${name}</h3>
      
      <h3 style="text-align: left;">Email: ${email}</h3>
      
      <h3 style="text-align: left;">Número de teléfono: ${num}</h3>
      
      <div style="text-align: left;">
        <h4>A continuación, de parte del equipo de AutoBid, queremos dejarte algunas recomendaciones a tener en cuenta para llevar a cabo una operación correcta y segura.</h4>
        <br/>
          1: Obtén un informe de multas por infracciones de tránsito.
            -Dirígete al siguiente enlace y completa tus datos como solicitante: https://www2.jus.gov.ar/dnrpa-site/#!/solicitante
            -Indica el dominio del vehículo en cuestión.
            -En tipo de tramite selecciona INFORME DE MULTAS POR INFRACCIONES DE TRANSITO, selecciona el registro correspondiente y procede a pagar la solicitud. 
            Pasadas las 24hs, en tu casilla de email recibirás en formato PDF una investigación con la información detallada. 
            <br/>
            <br/>
            2: Asegúrate de revisar cuidadosamente todos los documentos relacionados con el automóvil. Estos incluyen el título de propiedad, de existir, el formulario 08 (transferencia de dominio) firmado por el vendedor, el comprobante de la verificación técnica vehicular (VTV) vigente, cedulas del titular y autorizados. 
            <br/>
            <br/>
            3: Realiza una prueba de manejo antes de tomar una decisión final. Durante esta prueba, evalúa el rendimiento del automóvil, la comodidad, el funcionamiento de los controles y la respuesta del motor. Una prueba de manejo te ayudará a evaluar si el automóvil se ajusta a tus necesidades y expectativas.
            <br/>
            <br/>
            4: Firma un contrato de compraventa para proteger tus derechos y establecer los términos y condiciones de la compra. Asegúrate de que el contrato incluya detalles completos del vehículo, los datos del vendedor y del comprador, el precio acordado, la forma de pago y cualquier acuerdo adicional. Al contar con un contrato válido, estarás respaldado legalmente y evitarás posibles disputas en el futuro.
            <br/>
            <br/>
            Recuerda que estos consejos son solo una guía general y siempre es recomendable buscar asesoramiento legal o de expertos en transacciones de vehículos para asegurarte de seguir los procedimientos adecuados según las leyes y regulaciones vigentes en Argentina
      </div>
      
         
    </html>
    `
};