export {};

function add(a: number,b: number): number {
    return a+b;
}

function subtract(a:number, b: number): number {
    return a-b;
}

function sum(arrey: number[]): number {
    let res = 0;
    for (let i=0; i < arrey.length; i++) {
         res += arrey[i]
    }
    return res;
}

function multiply(arrey: number[]): number  {
    let res = 1;
    for (let i=0; i < arrey.length; i++) {
         res = res * arrey[i]
}
return res;
}

function power(a:number, b: number) :number {
return  Math.pow(a, b)
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
