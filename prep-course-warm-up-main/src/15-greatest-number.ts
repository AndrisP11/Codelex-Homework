export {};

function greatest(x: number, y: number): number | string {
    if (x < y){
        return y;
    } else if (y < x){
        return x;
    } else {
        return `Both numbers are equal to ${x}.`;
    }
}

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
console.log(greatest(5, 5)); // Expected output: 5