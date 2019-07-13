function accum(s) {
  return s
    .split("")
    .map((letter, index) => letter.repeat(index + 1)) // to repeat
    .map(repeated => repeated.charAt(0).toUpperCase() + repeated.slice(1).toLowerCase()) // to capitalize
    .join("-"); // to join with "-"
}

module.exports = accum;
