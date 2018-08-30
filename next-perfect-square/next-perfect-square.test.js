const findNextSquare = require('./next-perfect-square');

it('should input "test" and output -1', () => {
  expect(findNextSquare('test')).toBe(-1);
});

it('should input 121 and output 144', () => {
  expect(findNextSquare(121)).toBe(144);
});

it('should input 625 and output 676', () => {
  expect(findNextSquare(625)).toBe(676);
});

it('should input 114 and output -1', () => {
  expect(findNextSquare(114)).toBe(-1);
});
