const createPhoneNumber = require('./create-phone-number');

it('should input', () => {
  expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(
    '(123) 456-7890',
  );
});
