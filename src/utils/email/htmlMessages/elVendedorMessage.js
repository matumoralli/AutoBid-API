function elVendedorMessage({name, email, num}) {
    return `
    <html>
    <body style="text-align: center; margin: 3%; font-family: Arial, Helvetica, sans-serif; margin-left: 12%; margin-right: 12%;">
    <div >
        <a href="${process.env.INICIO_AUTOBID}" target="_blank">
            <img src="https://i.postimg.cc/nzJt61dB/Logo.png" alt="Imagen" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
        </a>
    </div>
    <br/>
    <br/>
      <h1>¡La subasta finalizo y tenemos un ganador!</h1>
      
      <h2>Por favor contáctate con el comprador para continuar con la venta del vehículo. Esta es su información de contacto:</h2>
      
      <p style="text-align: left;">Nombre: <span style="font-size: larger;">${name}</span></p>
      
      <p style="text-align: left;">Email: <span style="font-size: larger;">${num}</span></p>
      
      <p style="text-align: left;">Número de teléfono: <span style="font-size: larger;">${email}</span></p>
      
      <div style="text-align: left;">
        <h4>Desde el equipo de AutoBid queremos dejarte algunos consejos que te ayudaran a llevar a cabo una venta segura de tu vehículo.</h4>
        <br/>
        1: Contáctate con el comprador para acordar los detalles finales de la transacción, como el precio final, el método de pago y el lugar de entrega. Asegúrate de establecer una comunicación clara y obtener un acuerdo mutuo en todos los aspectos importantes. Selecciona un lugar público y seguro para encontrarte con el comprador, como una estación de servicio, un estacionamiento vigilado o una comisaría cercana. Evita reunirte en lugares remotos o desconocidos. 
            <br/>
            <br/>
            2: Redacta un contrato de compraventa que incluya los detalles acordados, como la descripción del vehículo, el precio, las condiciones de pago y entrega, y cualquier otra información relevante. Este contrato servirá como un documento legal para respaldar la transacción.            <br/>
            <br/>
            <br/>
            3: Realiza una verificación policial y organiza el papeleo necesario.            <br/>
            <br/>
            <br/>
            La misma será solicitada a la hora de realizar la transferencia. Organiza y prepara todos los documentos requeridos por la ley, como el título, todas las cedulas con autorización a usar el vehículo, foto copia de DNI del titular. Además, si tu vehículo está radicado en la Argentina, puede que tengas que tramitar el Certificado de Transferencia (CETA), esto depende del valor de venta. Podes consultarlo y hacerlo desde el siguiente enlace:
            <br/>
            <br/>
            <a href="https://cetaweb.afip.gob.ar/#/">https://cetaweb.afip.gob.ar/#/</a>
            <br/>
            <br/>
            4: Si no estás familiarizado con los trámites administrativos, es recomendable comunicarte con un gestor o profesional especializado para asistirte en la transferencia del vehículo. Para realizar la transferencia del vehículo de manera particular, sigue los siguientes pasos en la página del DNRPA:
            <br/>
            <br/>
            Ingresa al sitio web del DNRPA: <a href="www.dnrpa.gov.ar">www.dnrpa.gov.ar</a> y busca la opción de "Trámites" o "Transferencia de vehículos".
            <br/>
            <br/>
            Completa los datos requeridos, como el dominio del vehículo, los datos del comprador y del vendedor, y la información del contrato de compraventa. Realiza el pago correspondiente o elige la opción de pagarlo en el registro. Elige la fecha y horario que mejor se adapte a tu calendario y al de tu contraparte.
            <br/>
            <br/>
            Envía la solicitud y realiza un seguimiento regularmente para asegurarte de que la transferencia se complete correctamente.
            <br/>
            <br/>
            El día solicitado deberás de presentarte en el registro indicado para completar el trámite.
            </div>
            <br/>
            <br/>
            <a style="font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 5%; background-color: #ff1616; color: white; padding: 20px;" target="_blank" href=${process.env.INICIO_AUTOBID}>Ir a AutoBid</a>
      
         </body>
    </html>
    `
}

module.exports = elVendedorMessage