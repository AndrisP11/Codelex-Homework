export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */
function stringToArray(stringArr:string[]): string[] {
    //return stringArr[0].split(' ');
   // return stringArr.join(' ').split(' ');
   const result: string[]=[]
    stringArr.forEach((string:string) => {
         result.push(...string.split(' '))
   })
   return result
}
console.log(stringToArray(["John Doe", "Janis Bērziņš"])); // Expected output: ['John', 'Doe']
