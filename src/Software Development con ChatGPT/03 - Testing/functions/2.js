// Para ejecutar los tests que crees con mocha: npm run test-mocha
const axios = require('axios');

// La función que realiza la solicitud HTTP a la API externa
async function obtenerTemperaturaActual(ciudad) {
    const respuesta = await axios.get(`https://api.weather.com/clima?ciudad=${ciudad}`);
    return respuesta.data.temperatura;
}

module.exports = obtenerTemperaturaActual