function getSum(...input) {
  // put the numbers into an array
  let numbers = input;

  // if the two numbers are equal, return the first number
  if (numbers[0] === numbers[1]) return numbers[0];

  // sort the two numbers ascending
  numbers.sort((a, b) => a - b);

  // push all integers between the both numbers, including themselves, into new array
  let allIntegers = [];
  for (let num = numbers[0]; num <= numbers[1]; num++) {
    allIntegers.push(num);
  }

  // create sum
  // return sum
  return allIntegers.reduce((sum, currentNum) => sum + currentNum, 0);
}

module.exports = getSum;
