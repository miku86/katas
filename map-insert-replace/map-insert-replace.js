function isolateIt(input) {
  // take every element of the array
  // return all new strings in an array
  return input.map((str) => {
    return str.length % 2 === 0
      ? // If the string length is an even number, use the insert method.
        `${str.slice(0, str.length / 2)}|${str.slice(str.length / 2)}`
      : // If the string length is an odd number, use the replacement method.
        `${str.slice(0, Math.floor(str.length / 2))}|${str.slice(
          Math.floor(str.length / 2) + 1,
        )}`;
  });
}

module.exports = isolateIt;
