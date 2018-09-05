const isIsogram = require('./isograms');

it('should input "Dermatoglyphics" and output true', () => {
  expect(isIsogram('Dermatoglyphics')).toBe(true);
});

it('should input "aba" and output false', () => {
  expect(isIsogram('aba')).toBe(false);
});

it('should input "moOse" and output true', () => {
  expect(isIsogram('moOse')).toBe(false);
});
