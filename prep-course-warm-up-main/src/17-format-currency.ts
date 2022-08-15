export {};

/**
 * Currency Formatting
 *
 * The business has informed you that prices must have 2 decimal places
 * They must also start with the currency symbol
 * Write a function that transforms numbers into the format £0.00
 */

// You are allowed to change only this function
const GBP_SYMBOL: string = "£";

function formatCurrency (num: number,dec :number,currencySymbol:string):string{
  return currencySymbol + num.toFixed(dec);
}

function calculateSalesTax(price: number):number {
  return price * 0.21;
}

const product = "You don't know JS";
const price:number = 19.99;
const salesTax = calculateSalesTax(price);

console.log("Product: " + product);
console.log("Price: " + formatCurrency(price, 2 , GBP_SYMBOL));
console.log("Sales tax: " + formatCurrency(salesTax, 2 , GBP_SYMBOL));
console.log("Total: " + formatCurrency((price + salesTax), 2 , GBP_SYMBOL));

/* Expected output:

    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19

*/