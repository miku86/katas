function spinWords(input) {
  return (
    input
      // split the input string into separated words
      .split(' ')
      .map((word) => {
        // if a word has five or more letters
        return word.length >= 5
          ? // reverse it
            word
              .split('')
              .reverse()
              .join('')
          : // else return it unchanged
            word;
      })
      // join the words back to a string and return it
      .join(' ')
  );
}

module.exports = spinWords;
