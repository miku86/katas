function multiplesOf3Or5(input) {
  let results = [];

  // create loop from 1 to less than the input number
  for (let num = 1; num <= input - 1; num++) {
    // if the number is a multiple of 3 or 5
    if (num % 3 === 0 || num % 5 === 0) {
      // then add it to the results
      results.push(num);
    }
  }

  // create the sum of the results
  return results.reduce((sum, currentNum) => sum + currentNum, 0);
}

module.exports = multiplesOf3Or5;
