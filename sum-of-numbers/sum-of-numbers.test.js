const getSum = require('./sum-of-numbers');

it('should input 1, 0 and output 1', () => {
  expect(getSum(1, 0)).toBe(1);
});

it('should input 0, 1  and output 1', () => {
  expect(getSum(0, 1)).toBe(1);
});

it('should input 1, 1 and output 1', () => {
  expect(getSum(1, 1)).toBe(1);
});

it('should input -1, 2 and output 2', () => {
  expect(getSum(-1, 2)).toBe(2);
});
