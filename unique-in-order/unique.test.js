const unique = require('./unique');

it('should input "AAAABBBCCDAABBB" and output ["A", "B", "C", "D", "A", "B"]', () => {
  expect(unique('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
});

it('should input "ABBCcAD" and output ["A", "B", "C", "c", "A", "D"]', () => {
  expect(unique('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
});

it('should input [1, 2, 2, 3, 3] and output [1, 2, 3]', () => {
  expect(unique([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});
