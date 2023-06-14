const validarContraseña = require('../01-regex');

const regex = validarContraseña();
test("La contraseña 'ABc1234@' debería ser válida", () => {
   expect(regex.test('ABc1234@')).toBe(true);
});
test('Falta un número', () => {
   expect(regex.test('ABccccc@')).toBe(false);
});
test('Falta mayúscula', () => {
   expect(regex.test('sgc1234@')).toBe(false);
});
test('Falta una minúscula', () => {
   expect(regex.test('ABA1234@')).toBe(false);
});
test('Falta un carcater especial', () => {
   expect(regex.test('ABc1234')).toBe(false);
});
