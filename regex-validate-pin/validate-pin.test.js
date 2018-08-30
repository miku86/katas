const validatePin = require('./validate-pin');

it('should input 1234 and return true', () => {
  expect(validatePin('1234')).toBe(true);
});

it('should input 12345 and return false', () => {
  expect(validatePin('12345')).toBe(false);
});

it('should input a234 and return false', () => {
  expect(validatePin('a234')).toBe(false);
});
