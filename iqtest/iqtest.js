function iqTest(input) {
  // split string in array
  const numsInArray = input.split(' ');
  // filter for evenness
  const evenNumsLength = numsInArray.filter((el) => Number(el) % 2 === 0)
    .length;

  // if length 1
  return evenNumsLength === 1
    ? // then return index of first even number plus one
      numsInArray.indexOf(numsInArray.find((num) => num % 2 === 0)) + 1
    : // else return index of first odd number plus one
      numsInArray.indexOf(numsInArray.find((num) => num % 2 === 1)) + 1;
}

module.exports = iqTest;
