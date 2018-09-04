const pigIt = require('./simple-pig-latin');

it('should input "Pig latin is cool" and output "igPay atinlay siay oolcay"', () => {
  expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
});

it('should input "Hello world!" and output "elloHay orldWay !"', () => {
  expect(pigIt('Hello world !')).toBe('elloHay orldway !');
});
