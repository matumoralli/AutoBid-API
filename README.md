df# AutoBid-API
.

DATABASE --es llamado por -> SERVICES --es llamado por -> CONTROLLERS --se envian por -> ROUTES -- y terminan en -> SERVER

-get auctions (paginado) //hecho ==> /auctions?page=0&size=15 (page= pagina actual, size= cantidad por pagina(15 max))
-put auction  //hecho ==> /auctions/{id de auction} body={ datos a cambiar} 
-ban user //hecho
-post cardetal //hecho
-Crear las publicaciones y cargar el contenido. (descripciones, fotos, videos, archivos pdf)
-Editar las publicaciones. (todo el contenido)
-Borrar publicaciones.
-Eliminar comentarios dentro de las publicaciones.
-Comentar en las publicaciones como usuario “AutoBid” y que se diferencie visualmente de los comentarios de otros usuarios. 


cloudinaty

Al crear un auto (POST: /cars) tambien se debe enviar uno o mas archivos con el nombre image
Se puede subir una imagen de un auto (POST: /cars/image/{id del auto}) por form se debe enviar el archivo con el nombre image
Para borrar una imagen de un auto (DELETE: /cars/image/{id del auto}) por body se debe enviar la URL de la imagen como la propiedad "imageUrl"

# VARIABLES DE ENTORNO

DB_DATABASE=autobid
DB_USER=postgres
DB_PASSWORD=admin
TOKEN_URL=https://dev-ltm3bh0zvwyte1g5.us.auth0.com/oauth/token
CLIENT_ID=814fSgwGITiGRV1bZwFMIdX8ImWPLfUo
CLIENT_SECRET=MQqXnUPWMZwqInAaSPiK-NXFFUEpxxSSwV_EWP7id5CqSxYDrkC8ziBJwmKXZz3s
AUTH0_HELPER_AUDIENCE=https://dev-ltm3bh0zvwyte1g5.us.auth0.com/api/v2/
JWT_CHECK_AUDIENCE=https://autobid-backend.com/
ISSUER_BASE_URL=https://dev-ltm3bh0zvwyte1g5.us.auth0.com/
GMAIL_ACCOUNT = meetapp.nc@gmail.com
GMAIL_PASSWORD = xnaaeuaejldydhef
INICIO_AUTOBID = https://www.google.com
VENDETUAUTO_AUTOBID = https://www.google.com
CLOUDINARY_NAME= drwtxza2l
CLOUDINARY_APIKEY= 479449722438873
CLOUDINARY_SECRET= J1SkMSK-QSQ5jA1p0ACzOp477h4
