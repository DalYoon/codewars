const duplicateEncode = word => {
  const letters = word.toLowerCase().split(""); // lowercase string to array

  return letters
    .map(
      // to array of duplicated status
      (letter, letterIndex) =>
        letters.some((target, targetIndex) => letterIndex !== targetIndex && letter === target) // check letter duplicated
    )
    .map(result => (result ? ")" : "(")) // convert status to ")" or "("
    .join(""); // array to string
};

export default duplicateEncode;
