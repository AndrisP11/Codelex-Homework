export {};

const count = (str: string, searchString: string) => {
	/*let count = 0
	sentence.split(" ").forEach(word => word.toLowerCase() === sbstr && count++)
	count++*/
    function getWords(str1: string) {
        return str1.toLowerCase().split(" ");
      }
      
      const getMatchedWords = (words1:string[], searchString:string) =>{
        return words1.filter((word) => word === searchString )
      }
      
      const words1 = getWords(str);
      
      const matchedWords = getMatchedWords(words1,searchString);
      
return matchedWords.length
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
