/*
* The function finds the next integral perfect square after the one passed as a parameter.
* An integral perfect square is an integer n such that sqrt(n) is also an integer.
* If the parameter is itself not a perfect square, than -1 should be returned.
* Also check for the input as a number.

* @Input: no specific type
* @Output: number
*/

function findNextSquare(input) {
  // check if the input is an integer and the squareroot is an integer
  return Number.isInteger(input) && Number.isInteger(Math.sqrt(input))
    ? // increase it by one and return its square
      Math.pow(Math.sqrt(input) + 1, 2)
    : // else return -1
      -1;
}

module.exports = findNextSquare;
