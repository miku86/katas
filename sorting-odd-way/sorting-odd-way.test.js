const sortOddWay = require('./sorting-odd-way');

it("should input [1,2,3,4,5,6,7,8,9] and output [1,3,5,7,9,8,6,4,2]", ()=> {
  expect(sortOddWay([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe([1, 3, 5, 7, 9, 8, 6, 4, 2]);
});