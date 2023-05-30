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
