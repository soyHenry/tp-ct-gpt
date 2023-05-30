const misteriosa = require('../functions/5');
  
  describe('Función misteriosa', () => {
    test('Caso 1', () => {
      expect(misteriosa(true, true, true)).toBe(true);
    });
  
    test('Caso 2', () => {
      expect(misteriosa(true, true, false)).toBe(false);
    });
  
    test('Caso 3', () => {
      expect(misteriosa(true, false, true)).toBe(true);
    });
  
    test('Caso 4', () => {
      expect(misteriosa(true, false, false)).toBe(true);
    });
  
    test('Caso 5', () => {
      expect(misteriosa(false, true, true)).toBe(true);
    });
  
    test('Caso 6', () => {
      expect(misteriosa(false, true, false)).toBe(false);
    });
  
    test('Caso 7', () => {
      expect(misteriosa(false, false, true)).toBe(false);
    });
  
    test('Caso 8', () => {
      expect(misteriosa(false, false, false)).toBe(false);
    });
  });
  