function findParityOutlier(input) {
  // find out if outlier is odd or even
  const outlierIsOdd = (input) => {
    // if there is only one number, that is odd, than the outlier is odd, else even
    return input.filter((num) => num % 2).length === 1;
  };

  // filter out the number that is the outlier
  return outlierIsOdd(input)
    // return all odd numbers
    ? Number(input.filter((num) => num % 2 !== 0))
    // return all even numbers
    : Number(input.filter((num) => num % 2 === 0));
}

module.exports = findParityOutlier;
