const iqTest = require('./iqtest');

it('should input "2 4 7 8 10" and output 3', () => {
  expect(iqTest('2 4 7 8 10')).toBe(3);
});

it('should input "1 2 1 1" and output 2', () => {
  expect(iqTest('1 2 1 1')).toBe(2);
});
