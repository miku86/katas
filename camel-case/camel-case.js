function toCamelCase(input) {
  // search for a "-" or "_" followed by a character and replace it uppercased
  return input.replace(/[-_](\w)/g, (_, char) => char.toUpperCase());
}

module.exports = toCamelCase;
