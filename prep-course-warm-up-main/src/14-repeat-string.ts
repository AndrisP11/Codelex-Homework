export {};

const repeatString = (str: string, num: number): string => {
    let result: string = str;
    for (let i=1; i < num; i++){
        result= result + str;
    }
    return result;
    //return str.repeat(num);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
