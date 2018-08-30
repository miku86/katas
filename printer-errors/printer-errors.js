/*
* The Function gets a string with a length greater or equal to one and contains only letters from a to z
* and will output the error rate of the printer as a string representing a rational whose numerator is the number of errors
* and the denominator the length of the control string.
* Correct input characters are from a to m.
* Don't reduce this fraction to a simpler expression.
*
* @Input: String
* @Output: String
*/

function printerError(input) {
  // check length of input letters
  const lengthOfInput = input.length;
  // check length of invalid input letters and be safe against "null"
  const lengthOfInvalids = (input.match(/[^a-m]/g) || []).length;
  // return formatted string
  return `${lengthOfInvalids}/${lengthOfInput}`;
}

module.exports = printerError;
