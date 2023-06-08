const validarContraseña = require('../src/03/01-regex');


test('La contraseña "Abc12345" debería ser válida', () => {
    expect(validarContraseña('Abc12345')).toBe(true);
  });
  
  test('La contraseña "abcd1234" debería ser inválida', () => {
    expect(validarContraseña('abcd1234')).toBe(false);
  });
  
  test('La contraseña "Password" debería ser inválida', () => {
    expect(validarContraseña('Password')).toBe(false);
  });