export {};

/**
 * Ah, objects...
 * One of the most important concepts to understand in programming,
 * especially in JavaScript since the whole language is pretty much just objects 🤯
 *
 * Luckily they're not so difficult to learn. As always w3schools will help:
 *  - https://www.w3schools.com/js/js_objects.asp
 */

const books = [
  {
    title:  "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

interface Book {
  title: string;
  author: string;
}
const getTheTitles= (books: Book[]): string[] => {
  return books.map((book) => {return book.title})};

//const getTheTitles= (books: {title: string, author: string}[]): string[] => {
//  return books.map((book) => {return book.title})};

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
