# TS REST SERVER

Este es un proyecto de practica en NodeJS.

## Tecnologías utilizadas.

NodeJS
TypeScript
Docker
MySQL
Sequelize

## Instalar dependencias.

```
npm install
```

## Variables de entorno.

El proyecto utiliza un puerto. Además de esto, se utilizan varios servicios para funcionar, como variables para HOST, BASES DE DATOS, ETC,por lo que es necesario crear un archivo en la raíz del proyecto llamado ".env", dentro de ese archivo, se añadirán las debidas variables de entorno, las cuales se encuentran en el archivo ".env.template", estas deben ser reemplazadas por sus propias credenciales para el funcionamiento del proyecto.

## Docker MySQL

Se utiliza una imagen de MySQL y al mismo tiempo los volúmenes para poder almacenar la base de datos.

> Si se desea se puede saltar estos pasos modificando el `docker-compose.yaml` agregando sus propias variables.

### Pasos para usar docker

Comentar la linea 19: `this.dbConnection()` del archivo `models/server.ts`, esto con el fin de evitar errores al compilar a ts.

Ejecutar el proyecto

```
tsc
node/dist/app.js
```

Una vez hecho esto, ejecutar el siguiente comando para docker, sin cerrar la terminal anterior.

```
docker-compose up
```

Si todo sale correctamente se creara un contenedor con la imagen de MySQL y se agregaran los datos necesarios para utilizar los volúmenes de MySQL.

Para finalizar "descomentar" la linea 19: `this.dbConnection()` del archivo `models/server.ts`, para poder hacer la conexión de MySQL.

### Iniciar la app.

```
tsc
node dist/app.js
```

## Ejemplos de uso.

El proyecto es solo de ejemplo para un rest server, se pueden probar las rutas en postman.
