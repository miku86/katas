function getSum(input) {
  // sort input ascending
  const sorted = input.sort((a, b) => a - b);
  // add the first two numbers
  // return the sum
  return sorted[0] + sorted[1];
}

module.exports = getSum;
