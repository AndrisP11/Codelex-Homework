/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) { 
   /* const firstLetters: string = input.replace("-"," ")
   .replace("_"," ")
    .split(' ')
    .map(word => {
        return word[0].toUpperCase()
    }).join('');

  return firstLetters;*/

/*return input.replace(/[^a-zA-Z\s-]/g,"")
              .split(/[-\s]+/g).map(word => word[0]
              .toUpperCase()).join('');*/

    const clearInput = input.replace(/[^a-z\s-]+/gi,'') //regex kas nav a lidz z vai simboli dazadas vietas  case sensetive
    let result = ''
    clearInput.split(/[-\s]+/g).forEach(word => {
          if(word)
      {const firstLettersUpperCase = word[0].toUpperCase()
      result = result + firstLettersUpperCase}
    })
    return result
}

export { parse };
