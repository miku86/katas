const songDecoder = require('./dubstep');

it('should input "AWUBBWUBC" and output "A B C"', () => {
  expect(songDecoder('AWUBBWUBC')).toBe('A B C');
});

it('should input "AWUBWUBWUBBWUBWUBWUBC" and output "A B C"', () => {
  expect(songDecoder('AWUBWUBWUBBWUBWUBWUBC')).toBe('A B C');
});

it('should input "WUBAWUBBWUBCWUB" and output "A B C"', () => {
  expect(songDecoder('WUBAWUBBWUBCWUB')).toBe('A B C');
});
