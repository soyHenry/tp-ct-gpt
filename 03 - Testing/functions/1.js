// Para ejecutar los tests que crees con jest: npm run test-jest
function esPalindromo(palabra) {
  if (typeof palabra !== "string") {
    throw new Error("Se esperaba una cadena de texto como argumento");
  }

  const palabraNormalizada = palabra.toLowerCase().replace(/\s/g, "");
  const palabraInvertida = palabraNormalizada.split("").reverse().join("");

  return palabraNormalizada === palabraInvertida;
}

module.exports = esPalindromo