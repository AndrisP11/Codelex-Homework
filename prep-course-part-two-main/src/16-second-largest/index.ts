/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
    let largeArr = [...array]
    largeArr = largeArr.sort(function(a, b){return b-a})
    return parseInt((largeArr.slice(1,2).toString()), 10);
}

export { secondLargest };
