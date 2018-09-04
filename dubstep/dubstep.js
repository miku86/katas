function songDecoder(input) {
  return (
    input
      // replace "WUB" with space
      .replace(/WUB/g, ' ')
      // replace multiple spaces with one space
      .replace(/\s+/g, ' ')
      // trim trailing and ending spaces
      .trim()
  );
}

module.exports = songDecoder;
