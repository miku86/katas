const multiples = require('./multiples');

it('should take 10 and output 23', () => {
  expect(multiples(10)).toBe(23);
});

it('should take 20 and output 78', () => {
  expect(multiples(20)).toBe(78);
});
