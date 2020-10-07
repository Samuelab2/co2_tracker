<h1 align="center">Welcome to CO2_Foot_Tracker 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Manten el registro y control de la huella de carbono emitida por tu empresa

## 🚀 Install

1. Clonar el repositorio

`git clone https://github.com/Samuelab2/co2_tracker.git`

2. Cambiar a la carpeta generada

`cd co2_tracker`

# Backend

3. Dentro de la carpeta /backend se encuentra el desarrollo realizado con node.js, nos movemos a esta para instalar las dependencias adecuadas

`cd backend`

4. Ejecutamos para instalar los paquetes necesarios:

`yarn install`

5. Renombrar el archivo .env.example a .env para tener acceso a la url de coneccion a MongoDB Atlas

`cp .env.example .env`

6. Una vez terminada la instalacion, ejecutamos:

`yarn run dev`

7. En la consola deberiamos ver los siguientes mensajes:

`Server is running on port: 5000` y
`MongoDB database connection established successfully`

8. Navigate to the project in your browser

`localhost:5000/travels`

# Frontend

1. En una nueva terminal, nos aseguramos que estemos en la raiz del proyecto (`cd co2_tracker`) y ejecutamos:

`yarn install`

6. Una vez terminada la instalacion, ejecutamos:

`yarn run start`

8. Navigate to the project in your browser

`localhost:3000`

## Run tests

```sh
yarn run test
```

## Author

👤 **Samuel Mata**

* Website: [samuelmata.tech](https://samuelmata.tech)
* Github: [@Samuelab2](https://github.com/Samuelab2)

## Show your support

Give a ⭐️ if this project helped you!