import { 
    PRICE_HOTDOG, 
    PRICE_FRIES, 
    PRICE_SODA, 
    MEAL_DEAL_PRICE, 
    DISCOUNT_MEAL_RATE, 
    DISCOUNT_MEAL_THRESHOLD, 
    TAX_RATE } 
from "./joes_constants.js";

let Items = ["Hotdogs", "French Fries", "Drinks"];

const menuPrices = {
    "Hotdogs": 5.25,
    "French Fries": 3.75,
    "Drinks": 2.50
};

let orderQuantities = {
    "Hotdogs": 0,
    "French Fries": 0,
    "Drinks": 0
};

for (let item of Items) {
    let qty = prompt("How many " + item + " would you like?");
    orderQuantities[item] = parseInt(qty) || 0;
}

function showMoney(num) {
    let rounded = Math.round(num * 100) / 100;
    let str = rounded.toString();
    let parts = str.split(".");
    if (parts.length === 1) {
        str += ".00";
    } else if (parts[1].length === 1) {
        str += "0";
    }
    return str;
}

let numDogs = orderQuantities["Hotdogs"];
let numFries = orderQuantities["French Fries"];
let numSoda = orderQuantities["Drinks"];

let numMeals = Math.min(numDogs, numFries, numSoda);
let subtotal = (numMeals * 10.00) + 
               ((numDogs - numMeals) * menuPrices["Hotdogs"]) + 
               ((numFries - numMeals) * menuPrices["French Fries"]) + 
               ((numSoda - numMeals) * menuPrices["Drinks"]);

let rawSubtotal = subtotal;

let discount = 0;
if (subtotal >= 30) {
    discount = subtotal * 0.10;
    subtotal -= discount;
}

let tax = subtotal * 0.0625;
let finalTotal = subtotal + tax;

document.body.innerHTML = `
    <h1>Joe's Hotdog Stand - Version 2</h1>
    <div class="receipt">
        <p>Hotdogs: ${numDogs} ($${showMoney(numDogs * menuPrices["Hotdogs"])})</p>
        <p>Fries: ${numFries} ($${showMoney(numFries * menuPrices["French Fries"])})</p>
        <p>Drinks: ${numSoda} ($${showMoney(numSoda * menuPrices["Drinks"])})</p>
        <hr>
        <p>Subtotal before discount: $${showMoney(rawSubtotal)}</p>
        <p>Discount: -$${showMoney(discount)}</p>
        <p>New Subtotal: $${showMoney(subtotal)}</p>
        <p>Tax: $${showMoney(tax)}</p>
        <h2>Final Total: $${showMoney(finalTotal)}</h2>
    </div>
`;