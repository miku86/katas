const findOddNames = require('./find-odd-names');

it("should input [{ firstName: 'Aba', lastName: 'N.' }, { firstName: 'Abb', lastName: 'O.' }] and output [{ firstName: 'Abb', lastName: 'O.'}]", () => {
  expect(
    findOddNames([
      { firstName: 'Aba', lastName: 'N.' },
      { firstName: 'Abb', lastName: 'O.' },
    ]),
  ).toEqual([{ firstName: 'Abb', lastName: 'O.' }]);
});
