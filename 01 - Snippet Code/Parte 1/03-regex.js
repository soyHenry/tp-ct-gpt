// Este regex debe validar que un string sea un correo electrónico válido.

function validarCorreo() {
   let tuRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Agrega tu regex
   return tuRegex;
}

module.exports = validarCorreo;
