//La función isPalindrome se supone que verifica si una cadena es un palíndromo, es decir, si se lee igual de izquierda a derecha y de derecha a izquierda.

const isPalindrome = (str) => {
   let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
   let reversed = cleanStr.split('').reverse().join('');

   return cleanStr === reversed;
};

isPalindrome();

module.exports = isPalindrome;
