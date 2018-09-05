const findMissingLetter = require('./missing-letter');

it("should input ['a', 'b', 'c', 'd', 'f'] and output 'e'", () => {
  expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e');
});

it("should input ['O', 'Q', 'R', 'S'] and output 'P'", () => {
  expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toBe('P');
});
