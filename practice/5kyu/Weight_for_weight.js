const orderWeight = strng => {
  const orderedWeight = strng
    .split(" ")
    .map(getSumByLetters)
    .sort((a, b) => (a.sum - b.sum !== 0 ? a.sum - b.sum : sortByString(a.letters, b.letters)))
    .map(({ letters }) => letters)
    .join(" ");

  return orderedWeight ? orderedWeight : "";
};

const getSumByLetters = letters => {
  const sum = letters
    .split("")
    .map(letter => parseInt(letter, 10))
    .reduce((prev, curr) => prev + curr, 0);
  return { letters, sum };
};

const sortByString = (a, b) => {
  const sorted = a
    .split("")
    .map((string, index) => (b[index] ? string - b[index] : 1))
    .filter(a => a !== 0)[0];

  return sorted ? sorted : 0;
};

export default orderWeight;
