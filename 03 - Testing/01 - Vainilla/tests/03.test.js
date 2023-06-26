const buscarPalabra = require('../Ejercicio 03');

// Test para verificar si la función encuentra correctamente la palabra en el texto
test('Encuentra la palabra en el texto', () => {
   const texto = 'La casa es bonita y la casa es grande';
   const palabra = 'casa';
   const resultado = buscarPalabra(texto, palabra);
   expect(resultado).toEqual([3, 8]);
});

// Test para verificar si la función maneja correctamente una palabra que no se encuentra en el texto
test('Maneja palabra no encontrada', () => {
   const texto = 'El sol brilla en el cielo';
   const palabra = 'luna';
   const resultado = buscarPalabra(texto, palabra);
   expect(resultado).toEqual([]);
});

// Test para verificar si la función maneja correctamente una palabra vacía
test('Maneja palabra vacía', () => {
   const texto = 'Hola mundo';
   const palabra = '';
   const resultado = buscarPalabra(texto, palabra);
   expect(resultado).toEqual([]);
});

// Test para verificar si la función maneja correctamente texto y palabra no válidos
test('Maneja texto y palabra no válidos', () => {
   const texto = null;
   const palabra = 'hola';
   const resultado = buscarPalabra(texto, palabra);
   expect(resultado).toEqual([]);
});

// Test para verificar si la función maneja correctamente texto y palabra en mayúsculas y minúsculas
test('Maneja texto y palabra en mayúsculas y minúsculas', () => {
   const texto = 'La casa es bonita y la casa es grande';
   const palabra = 'CASA';
   const resultado = buscarPalabra(texto, palabra);
   expect(resultado).toEqual([3, 8]);
});
