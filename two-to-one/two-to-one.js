function twoToOne(...input) {
  return [
    // change into Set to delete duplicates
    ...new Set(
      input
        // join all inputs into one array
        .join('')
        .split('')
        // sort array ascending
        .sort(),
    ),
    // return as string
  ].join('');
}

module.exports = twoToOne;
