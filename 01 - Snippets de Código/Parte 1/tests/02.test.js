const validatePhone = require('../02-regex');

const regex = validatePhone();

test("El teléfono '+54 3513283473' debe ser válido", () => {
   expect(regex.test('+54-3513283473')).toBe(true);
});
test('No sige con dos dígitos numéricos', () => {
   expect(regex.test('+5a-351328373')).toBe(false);
});
test("No sige con '-'", () => {
   expect(regex.test('+54+3513283473')).toBe(false);
});
test('Faltan los 10 dígitos numéricos', () => {
   expect(regex.test('+54-351383473')).toBe(false);
});
