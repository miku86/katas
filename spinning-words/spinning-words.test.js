const spinWords = require('./spinning-words');

it('should input "Hey fellow warriors" and output "Hey wollef sroirraw"', () => {
  expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
});

it('should input "This is a test" and output "This is a test"', () => {
  expect(spinWords('This is a test')).toBe('This is a test');
});

it('should input "This is another test" and output "This is rehtona test"', () => {
  expect(spinWords('This is another test')).toBe('This is rehtona test');
});