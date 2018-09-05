function isIsogram(input) {
  // count occurency of chars, ignoring letter-case
  const counter = input
    .toLowerCase()
    .split('')
    .reduce((sum, char) => {
      sum[char] ? sum[char]++ : (sum[char] = 1);
      return sum;
    }, {});

  // return if none char has occurency of more than 1
  return !Object.values(counter).some((value) => value > 1);
}

module.exports = isIsogram;
