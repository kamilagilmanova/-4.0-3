function isSymmetric(symbols) {
  for (let i = 0; i < symbols.length / 2; i++) {
    if (symbols[i] !== symbols[symbols.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

const tests = [
  [2, 5, 7, 5, 2],
  [4, 1, 3, 1, 4],
  [2, 5, 7, 4, 2],
  [9, 9, 9, 9],
  [1, 2],
  [6],
];

tests.forEach((symbols) => {
  console.log(isSymmetric(symbols));
});
