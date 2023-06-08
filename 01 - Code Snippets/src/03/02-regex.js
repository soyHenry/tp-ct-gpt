
//Desafío 2: Validación de número de teléfono
function validarTelefono(telefono) {
    const phoneRegex = /^\+\d{2}-\d{10}$/;
    return phoneRegex.test(telefono);
};



module.exports = validarTelefono;
