function unique(input) {
  // if input is empty, return empty array
  if (input.length < 1) return [];
  // if input is not array, split input into array
  let splittedInArray = input;
  if (typeof input === 'array') splittedInArray = input.split('');

  let result = [];
  let prevItem;

  for (let i = 0; i < splittedInArray.length; i++) {
    // if current item isn't the previous item
    // add item into new array
    if (splittedInArray[i] !== prevItem) result.push(splittedInArray[i]);
    prevItem = splittedInArray[i];
  }
  // return joined array
  return result;
}

module.exports = unique;
