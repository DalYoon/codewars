// question

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  return s
    .split("")
    .map((letter, index) => letter.repeat(index + 1)) // to repeat
    .map(repeated => repeated.charAt(0).toUpperCase() + repeated.slice(1).toLowerCase()) // to capitalize
    .join("-"); // to join with "-"
}

module.exports = accum;
