function findMissingLetter(input) {
  // create array with the inputs' charcodes
  const charcodes = input.map((char) => char.charCodeAt());

  // look at charcode of first element
  // increase charcode + 1
  let currentCode = charcodes[0] + 1;

  while (true) {
    // if the charccode is not in the array
    if (!charcodes.includes(currentCode)) {
      // return its char
      return String.fromCharCode(currentCode);
    } else {
      // else increase charcode + 1
      currentCode++;
    }
  }
}

module.exports = findMissingLetter;
