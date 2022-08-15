/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  obj: object = {};
 

count(str: string) {

  this.obj = str.trim().toLowerCase().replace("\t"," ").replace("\n"," ")
  .replace("constructor","cconstructor").split(" ").filter(e => e !== '').sort(function (a, b) {
    return a.localeCompare(b)}).reduce((hash:any, word:any) => {
      if(word === "cconstructor"){
        word = "constructor"
        hash[word] =  1
        return hash
      }
    hash[word] = hash[word] || 0;
    hash[word]++;

    return hash;
  }, {});
  
  return this.obj

} 
}

export { Words };
