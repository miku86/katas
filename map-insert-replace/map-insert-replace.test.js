const isolateIt = require('./map-insert-replace');

it('should input ["abcd", "efgh"] and output ["ab|cd", "ef|gh"]', () => {
  expect(isolateIt(['abcd', 'efgh'])).toEqual(['ab|cd', 'ef|gh']);
});

it('should input ["abcde", "fghij"] and output ["ab|de", "fg|ij"]', () => {
  expect(isolateIt(['abcde', 'fghij'])).toEqual(['ab|de', 'fg|ij']);
});

it('should input ["1234", "56789"] and output ["12|34", "56|89"]', () => {
  expect(isolateIt(['1234', '56789'])).toEqual(['12|34', '56|89']);
});
