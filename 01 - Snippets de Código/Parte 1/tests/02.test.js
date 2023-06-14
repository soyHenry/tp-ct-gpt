const validarTelefono = require('../02-regex');

test('El número de teléfono "+34-1234567890" debería ser válido', () => {
   expect(validarTelefono('+34-1234567890')).toBe(true);
});

test('El número de teléfono "1234567890" debería ser inválido', () => {
   expect(validarTelefono('1234567890')).toBe(false);
});

test('El número de teléfono "+12-abcdefghij" debería ser inválido', () => {
   expect(validarTelefono('+12-abcdefghij')).toBe(false);
});
