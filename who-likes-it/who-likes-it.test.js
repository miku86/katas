const whoLikesIt = require('./who-likes-it');

it('should input [] and output "no one likes this"', () => {
  expect(whoLikesIt([])).toEqual('no one likes this');
});

it('should input "Peter" and output "Peter likes this"', () => {
  expect(whoLikesIt(['Peter'])).toEqual('Peter likes this');
});

it('should input ["Jacob", "Alex"] and output "Jacob and Alex like this"', () => {
  expect(whoLikesIt(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this');
});

it('should input ["Max", "John", "Mark"] and output "Max, John and Mark like this"', () => {
  expect(whoLikesIt(['Max', 'John', 'Mark'])).toEqual(
    'Max, John and Mark like this',
  );
});

it('should input ["Alex", "Jacob", "Mark", "Max"] and output "Alex, Jacob and 2 others like this"', () => {
  expect(whoLikesIt(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual(
    'Alex, Jacob and 2 others like this',
  );
});
