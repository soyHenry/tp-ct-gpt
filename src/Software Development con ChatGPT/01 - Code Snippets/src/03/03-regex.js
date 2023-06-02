//Desafío 3: Extracción de dominio de correo electrónico
function obtenerDominioCorreo(correo) {
    const dominio = correo.match(/@([\w.-]+)$/)?.[1];
    return dominio || undefined;
};




module.exports = obtenerDominioCorreo;