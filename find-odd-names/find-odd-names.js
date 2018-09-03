function findOddNames(input) {
  // create sum of firstName char codes
  const sumOfCharCode = (name) => {
    let sumOfChars = 0;
    for (let i = 0; i < name.length; i++) {
      sumOfChars += name.charCodeAt(i);
    }
    return sumOfChars;
  };

  // filter array for person with odd firstname
  return input.filter((person) => sumOfCharCode(person.firstName) % 2 === 1);
}

module.exports = findOddNames;
