df# AutoBid-API
.

DATABASE --es llamado por -> SERVICES --es llamado por -> CONTROLLERS --se envian por -> ROUTES -- y terminan en -> SERVER

-get auctions (paginado)
-put auction
-ban user //hecho
-post cardetal //hecho
-Crear las publicaciones y cargar el contenido. (descripciones, fotos, videos, archivos pdf)
-Editar las publicaciones. (todo el contenido)
-Borrar publicaciones.
-Eliminar comentarios dentro de las publicaciones.
-Comentar en las publicaciones como usuario “AutoBid” y que se diferencie visualmente de los comentarios de otros usuarios. 


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