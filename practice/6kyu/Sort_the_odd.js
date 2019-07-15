const sortArray = array => {
  const odds = array
    .map(number => (number % 2 !== 0 ? number : null))
    .filter(number => number)
    .sort((a, b) => a - b);

  array.forEach((number, index) => {
    if (number % 2 === 0) odds.splice(index, 0, number);
  });

  return odds;
};

export default sortArray;
