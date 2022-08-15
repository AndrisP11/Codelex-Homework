export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

const min = (array: number[]): number => {
    return array.reduce(function (p: number, v: number): number {
        return ( p < v ? p : v );
      });
};

const max = (array: number[]): number => {
    return Math.max(...array);
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
