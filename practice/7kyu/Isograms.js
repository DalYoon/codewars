const isIsogram = str => {
  return !str
    .toLowerCase() // to lower case
    .split("") // string to array
    .some((letter, index, self) => self.indexOf(letter) !== self.lastIndexOf(letter)); // repeating check
};

export default isIsogram;
