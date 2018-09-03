function findOddNumber(input) {
  const numbers = {};

  // find how often the number appears
  for (let num of input) {
    typeof numbers[num] === 'undefined' ? (numbers[num] = 1) : numbers[num]++;
  }

  // return the number of the entry with odd count
  return Number(
    Object.entries(numbers).filter((entry) => entry[1] % 2 === 1)[0][0],
  );
}

module.exports = findOddNumber;
