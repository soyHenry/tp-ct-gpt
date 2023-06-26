// Este regex debe validar que el teléfono tenga:
// - Luego, dos dígitos numéricos.
// - A continuación, un guión (-).
// - Después, exactamente diez dígitos numéricos.

function validatePhone() {
   let tuRegex = /^\+\d{2}-\d{10}$/; // Agrega tu regex
   return tuRegex;
}

module.exports = validatePhone;
