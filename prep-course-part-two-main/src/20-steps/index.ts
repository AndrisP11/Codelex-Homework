/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {
    for (let i = 1; i <= n; i++) { 
        let str = ''; 
        
        for (let k = 1; k <= (i); k++) { 
          str = str + '#'; 
        }
        for (let d = 1; d < n-i+1; d++) { 
            str = str + ' '; 
          }  
        console.log(str); 
      }
}

export { steps };
