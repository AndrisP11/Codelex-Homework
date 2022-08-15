export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function

const BRL_TO_USD_RATE = 0.19;
const USD_TO_BRL_RATE = 5.27;

function convertCurrency (price: number, rate: number): number {
    return price = price * rate;
}

function formatNum (num: number,dec :number):string{
    return num.toFixed(dec);
}

function tax (num: number) :number{
    return num = num +(num*0.01);
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertCurrency(price,BRL_TO_USD_RATE);
const priceInBRL = convertCurrency(price,USD_TO_BRL_RATE);
const afterTaxUSD = tax(priceInUSD);
const afterTaxBRL = tax(priceInBRL);

console.log("Product: " + product);
console.log("Price: $" + formatNum(afterTaxUSD,2));
console.log("Price: R$" + formatNum(afterTaxBRL,2));

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
