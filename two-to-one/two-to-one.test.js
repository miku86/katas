const twoToOne = require('./two-to-one');

it("should input ('xyaabbbccccdefww', 'xxyyabklmopq') and output 'abcdefklmopqwxy'", () => {
  expect(twoToOne('xyaabbbccccdefww', 'xxyyabklmopq')).toBe('abcdefklmopqwxy');
});

it("should input ('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz') and output 'abcdefghijklmnopqrstuvwxyz'", () => {
  expect(
    twoToOne('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'),
  ).toBe('abcdefghijklmnopqrstuvwxyz');
});
