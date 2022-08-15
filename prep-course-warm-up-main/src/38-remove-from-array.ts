export {};

const removeFromArray = function(arr:number[],...args:number[]) {
	
	return arr.filter(number =>args.indexOf(number) === -1);
	
	
	
	
  /* const intersection: number[] = args.filter(element => arr.includes(element));
   arr.forEach(num =>{
    intersection.forEach(num2 =>{
        if(num===num2){
            let index = arr.indexOf(num)
            arr.splice(index,1) 
        }       
    })
   })
 return arr*/

};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */