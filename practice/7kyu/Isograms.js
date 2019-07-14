const isIsogram = str => {
  return !str
    .toLowerCase()
    .split("")
    .some((letter, index, self) => self.indexOf(letter) !== self.lastIndexOf(letter));
};

export default isIsogram;
