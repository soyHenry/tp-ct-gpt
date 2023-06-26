const findLargestWord = require('../Ejercicio 01.js');

test('findLargestWord returns the largest word in a sentence', () => {
   expect(findLargestWord('The quick brown fox jumps over the lazy dog')).toBe(
      'jumps'
   );
});

test('findLargestWord returns an empty string if the sentence is empty', () => {
   expect(findLargestWord('')).toBe('');
});

test('findLargestWord returns the word itself if the sentence has only one word', () => {
   expect(findLargestWord('Hello')).toBe('Hello');
});

test('findLargestWord ignores punctuation marks and considers alphanumeric characters only', () => {
   expect(findLargestWord('Hello, world! How are you?')).toBe('Hello');
});
