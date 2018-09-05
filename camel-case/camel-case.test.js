const toCamelCase = require('./camel-case');

it("should input 'the-stealth-warrior' and output 'theStealthWarrior'", () => {
  expect(toCamelCase('the-stealth-warrior')).toBe('theStealthWarrior');
});

it("should input 'The_Stealth_Warrior' and output 'TheStealthWarrior'", () => {
  expect(toCamelCase('The_Stealth_Warrior')).toBe('TheStealthWarrior');
});
