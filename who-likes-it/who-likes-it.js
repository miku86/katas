function whoLikesIt(input) {
  // find length of the input array
  const numOfLikes = input.length;

  // switch statement between different amount of numOfLikes
  switch (numOfLikes) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${input[0]} likes this`;
    case 2:
      return `${input[0]} and ${input[1]} like this`;
    case 3:
      return `${input[0]}, ${input[1]} and ${input[2]} like this`;
    default:
      return `${input[0]}, ${input[1]} and ${numOfLikes - 2} others like this`;
  }
}

module.exports = whoLikesIt;
