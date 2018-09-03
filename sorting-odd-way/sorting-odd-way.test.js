const sortOddWay = require('./sorting-odd-way');

it("should input [1,2,3,4,5,6,7,8,9] and output [1,3,5,7,9,8,6,4,2]", ()=> {
  expect(sortOddWay([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 3, 5, 7, 9, 8, 6, 4, 2]);
});

it("should input [11, 22, 33, 44, 55, 55, 90.4, 4, 78] and output [11, 33, 55, 55, 90.4, 78, 44, 22, 4]", ()=> {
  expect(sortOddWay([11, 22, 33, 44, 55, 55, 90.4, 4, 78]
  )).toEqual([11, 33, 55, 55, 90.4, 78, 44, 22, 4]);
});