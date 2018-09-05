const getSum = require('./sum');

it('should input [19, 5, 42, 2, 77] and output 7', () => {
  expect(getSum([19, 5, 42, 2, 77])).toBe(7);
});

it('should input [10, 343445353, 3453445, 3453545353453] and output 3453455', () => {
  expect(getSum([10, 343445353, 3453445, 3453545353453])).toBe(3453455);
});
