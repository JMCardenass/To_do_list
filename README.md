# TodoList

Este es un programa llamado TodoList que te permite gestionar tus tareas pendientes. Con una interfaz sencilla y fácil de usar, puedes agregar, actualizar y eliminar tareas de tu lista.

## Requisitos

Asegúrate de tener instalado lo siguiente antes de ejecutar la aplicación:

- Node.js
- Express.js
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio en tu máquina local o descarga el archivo ZIP.


2. Navega hasta el directorio del proyecto.


3. Instala las dependencias del proyecto utilizando npm.


## Configuración

Antes de ejecutar la aplicación, debes configurar algunos parámetros.

1. Abre el archivo `config.js` en el directorio raíz del proyecto.

```javascript
module.exports = {
  // Configuración de la base de datos
  database: {
    host: 'localhost',
    port: 3000
  },
};
