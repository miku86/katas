function sortOddWay(input) {
  const oddNumbersAscending = input
    // find odd numbers
    .filter((num) => Math.floor(num) % 2 === 1)
    // sort them ascending
    .sort((a, b) => a - b);

  const evenNumbersDescending = input
    // find even numbers
    .filter((num) => Math.floor(num) % 2 === 0)
    // sort them descending
    .sort((a, b) => b - a);

  return oddNumbersAscending.concat(evenNumbersDescending);
}

module.exports = sortOddWay;
