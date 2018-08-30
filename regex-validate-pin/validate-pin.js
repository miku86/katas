/*
* The Function inputs anything and outputs, if the Pin Code contains exactly 4 digits or exactly 6 digits.
* @Input: any type
* @Output: Boolean
*/

function validatePin(input) {
  // return if the length of the input is exactly 4 or 6 digits
  // regex: start with 4 digits: ^\d{4}
  // regex: end with not captured additional 2 digits: (?:\d{2})?$
  return /^\d{4}(?:\d{2})?$/.test(input);
}

module.exports = validatePin;
