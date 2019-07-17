// yeah i'm fuckin idiot
// just split, sort, join were all i needed

const anagrams = (word, words) => {
  const wordCounts = getSpellCounts(word);
  const wordsCounts = words.map((eachWord, index) => ({ index, counts: getSpellCounts(eachWord) }));
  const matched = [];

  wordsCounts.forEach(
    ({ index, counts }) => compareObject(wordCounts, counts) && matched.push(words[index])
  );

  return matched;
};

const getSpellCounts = word => {
  const unordered = {};
  const ordered = {};

  word
    .split("")
    .forEach(letter => (unordered[letter] ? (unordered[letter] += 1) : (unordered[letter] = 1)));

  Object.keys(unordered)
    .sort()
    .forEach(key => (ordered[key] = unordered[key]));

  return ordered;
};

const compareObject = (obj1, obj2) => {
  const targetLoop = Object.keys(obj2).length > Object.keys(obj1).length ? obj2 : obj1;
  return !Object.keys(targetLoop).some(key => obj1[key] !== obj2[key]);
};

export default anagrams;
