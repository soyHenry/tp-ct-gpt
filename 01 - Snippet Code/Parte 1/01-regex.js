// Este regex debe validar que una contraseña tenga:
//  - Al menos 8 caracteres
//  - Al menos 1 letra mayúscula y 1 minúscula
//  - Al menos 1 número
//  - Al menos 1 carácter especial

function validarContraseña() {
   let tuRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Agrega tu regex
   return tuRegex;
}

module.exports = validarContraseña;
