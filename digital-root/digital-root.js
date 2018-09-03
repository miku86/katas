function digitalRoot(input) {
  const sumOfDigits = (num) => {
    // split digits into array and add them up
    return [...num.toString()].reduce(
      (sum, currentNum) => sum + Number(currentNum),
      0,
    );
  };

  let sum = 0;

  // while input has more than 1 digit
  while (input.toString().length > 1) {
    // then sum digits and reassign sum and input
    input = sum = sumOfDigits(input);
  }

  // return sum
  return sum;
}

module.exports = digitalRoot;
