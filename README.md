# TEST_SERVER
Rutas activas del proyecto:
| Ruta | Método | observaciones |
| ---  | --- | --- |
| '/' | Cualquiera | Responde con texto un saludo | 
| '/getProducts' | GET | Responde un archivo JSON con
la lista de productos |
| '/searchProduct' | GET | Requiere ID o nombre (enviado por los _querys/parmas_) y devuelve el producto buscado si existe | 
| '/createUser' | POST | Requiere nombre, email y contraseña (enviados por el _body_ de la petición en formato JSON) y devuelve el estado de la creación del usuario