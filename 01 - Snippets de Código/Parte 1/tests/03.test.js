const obtenerDominioCorreo = require('../03-regex');

test('El dominio del correo "ejemplo@dominio.com" debería ser "dominio.com"', () => {
   expect(obtenerDominioCorreo('ejemplo@dominio.com')).toBe('dominio.com');
});

test('El dominio del correo "usuario@gmail.com" debería ser "gmail.com"', () => {
   expect(obtenerDominioCorreo('matu@gmail.com')).toBe('gmail.com');
});
