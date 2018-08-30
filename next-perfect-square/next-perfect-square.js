/*
* The function finds the next integral perfect square after the one passed as a parameter.
* An integral perfect square is an integer n such that sqrt(n) is also an integer.
* If the parameter is itself not a perfect square, than -1 should be returned.
* Also check for the input as a number.

* @Input: no specific type
* @Output: number
*/

function findNextSquare(input) {
  // check if the input is a number, else return -1
  if (!Number.isInteger(input)) return -1;
  // with regex: if (!/\d+/.test(input)) return -1;

  // calculate the squareroot
  const squareroot = Math.sqrt(input);

  // if the squareroot is not an integer, return -1
  if (!Number.isInteger(squareroot)) return -1;

  // else increase it by one
  const increasedSquareroot = squareroot + 1;

  // and return its square
  const squareOfIncreasedSquareroot = Math.pow(increasedSquareroot, 2);
  return squareOfIncreasedSquareroot;
}

module.exports = findNextSquare;
