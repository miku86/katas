const printerError = require('./printer-errors');

it('should take "aaabbbbhaijjjm" and output "0/14"', () => {
  expect(printerError('aaabbbbhaijjjm')).toBe('0/14');
});

it('should take "aaaxbbbbyyhwawiwjjjwwm" and output "8/22"', () => {
  expect(printerError('aaaxbbbbyyhwawiwjjjwwm')).toBe('8/22');
});
