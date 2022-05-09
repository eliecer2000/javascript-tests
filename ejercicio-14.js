/*
Prueba técnica de JavaScript
Version: 0.1

Este ejercicio cuenta con un llamado a un servicio de API REST con el método "GET", determinar por que no funciona, y al estar en funcionamiento este devuelve un listado de usuarios con los siguientes campos:
- id
- name
- avatar
- createdAt

El objetivo es imprimir todos y cada uno de los elementos en esta lista de manera ordenada de la siguiente manera: (id) name

(41) Travis Rau
(42) Ernesto Brekker
(43) Mark Perez
...
...


dependencias:

- Axios - https://github.com/axios/axios

*/

const axios = require("axios");

axios({
  method: "post",
  url: "https://625f62b292df0bc0f333c1b0.mockapi.io/api/v1/users"
})
  .then(function ({ data }) {
    console.log("Data :", data); // Eliminar, Solo para demostrar cuando funcione el llamado.
  })
  .catch((error) => {
    console.log("Error ", error.message);
  });
