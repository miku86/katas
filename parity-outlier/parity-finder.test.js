const findParityOutlier = require('./parity-finder');

it('should take [2, 4, 0, 100, 4, 11, 2602, 36] and return 11', () => {
  expect(findParityOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
});

it('should take [160, 3, 1719, 19, 11, 13, -21] and return 160', () => {
  expect(findParityOutlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
});
