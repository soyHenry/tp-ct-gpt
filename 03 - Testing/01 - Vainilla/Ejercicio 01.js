// Esta función verifica si un string se puede leer igual de atrás para adelante.

function esPalindromo(palabra) {
   if (typeof palabra !== 'string') {
      throw new Error('Se esperaba una cadena de texto como argumento');
   }

   const palabraNormalizada = palabra.toLowerCase().replace(/\s/g, '');
   const palabraInvertida = palabraNormalizada.split('').reverse().join('');

   return palabraNormalizada === palabraInvertida;
}

console.log(esPalindromo('Anita lava la tina')); // Es palíndromo
console.log(esPalindromo('Anita lava la tina.')); // No es palíndromo

module.exports = esPalindromo;
