const digitalRoot = require('./digital-root');

it('should take 16 and return 7', () => {
  expect(digitalRoot(16)).toBe(7);
});

it('should take 493193 and return 2', () => {
  expect(digitalRoot(493193)).toBe(2);
});
