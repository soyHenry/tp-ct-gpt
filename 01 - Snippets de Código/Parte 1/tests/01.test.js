const validarContraseña = require('../01-regex');

describe('PASSWORD REGEX', () => {
   const regex = validarContraseña();
   it("La contraseña 'Abc12345' debería ser válida", () => {
      expect(regex.test('Abc12345')).toBe(true);
   });
   it("La contraseña 'abcd1234' debería ser inválida", () => {
      expect(regex.test('abcd1234')).toBe(false);
   });
   it("La contraseña 'Password' debería ser inválida", () => {
      expect(regex.test('Password')).toBe(false);
   });
});
