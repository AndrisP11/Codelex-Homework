export {};

/**
 * Currency Formatting
 *
 * The business is breaking out into a new market and need to convert prices to USD
 * Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
 */
// You are allowed to change only this function
const UST_TO_GBP_RATE = 1.4;

function convertToUSD(price: number, rate: number) :number{
    return price= price * rate
}
function formatNum (num: number,dec :number):string{
    return num.toFixed(dec);
}

const product = "You don't know JS";
const price = 19.99;
const priceInUSD = convertToUSD(price, UST_TO_GBP_RATE);

console.log("Product: " + product);
console.log("Price: $" + formatNum(priceInUSD,2));

/* Expected output:

    > Product: You don't know JS
    > Price: $27.99

*/