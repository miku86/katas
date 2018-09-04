function pigIt(input) {
  return (
    input
      // split sentence in its words
      .split(' ')
      .map((word) => {
        return word.split('').every((char) => /[a-zA-Z]/.test(char))
          ? // move the first letter of each word to the end of it
            // add "ay" to the end of the word
            `${word.slice(1)}${word.slice(0, 1)}ay`
          : // leave punctuation marks untouched.
            word;
      })
      // return joined words
      .join(' ')
  );
}

module.exports = pigIt;
