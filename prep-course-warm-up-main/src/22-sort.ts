export {};

const letters = ["a", "n", "c", "e", "z", "f"];
let sortedLetters = letters.sort(function (a, b) {
    return a.localeCompare(b);
  }); // You are allowed to change only this line

console.log(sortedLetters); // Expected output: [ 'a', 'c', 'e', 'f', 'n', 'z' ]
