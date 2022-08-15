/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
   /* let vowels:number = 0;
    for(let i = 0; i<s.length;i++){
        s = s.toLowerCase()
        if(s[i]==="a"||s[i]==="e"||s[i]==="i"||s[i]==="o"||s[i]==="u"){
            vowels++
        }
    }
    return vowels*/
    const vowelsArr= s.match(/[aeiou]/gi)
    return vowelsArr === null ? 0 : vowelsArr.length
    //return (s.match(/[aeiou]/gi) || []).length
}

export { vowels };
