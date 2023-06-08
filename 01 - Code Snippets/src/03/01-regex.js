


//Desafío 1: Validación de contraseña
function validarContraseña(contraseña) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(contraseña);
};




module.exports = validarContraseña;