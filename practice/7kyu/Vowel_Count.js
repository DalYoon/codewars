const getCount = str => {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  str
    .toLowerCase()
    .split("")
    .forEach((letter, index) => {
      if (vowels.find(vowel => letter === vowel)) vowelsCount += 1;
    });

  return vowelsCount;
};

export default getCount;
