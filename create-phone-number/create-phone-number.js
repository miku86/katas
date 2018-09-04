function createPhoneNumber(input) {
  // add additional signs into input array
  input.splice(0, 0, '(');
  input.splice(4, 0, ') ');
  input.splice(8, 0, '-');
  return input.join('');
}

module.exports = createPhoneNumber;
