const MEAL_DEAL_PRICE = 10.00;
const DISCOUNT_MEAL_RATE = 0.1;
const DISCOUNT_MEAL_THRESHOLD = 30.00; 
const TAX_RATE = 0.0625;

const menuPrices = {
    "Hotdogs": 5.25,
    "French Fries": 3.75,
    "Drinks": 2.50
};

const menuText = `
Hotdogs: $${menuPrices["Hotdogs"]}
Fries: $${menuPrices["French Fries"]}
Sodas: $${menuPrices["Drinks"]}`;

let specialText = `
Meal Deal: 1 Dog, 1 Fry, 1 Drink for $${MEAL_DEAL_PRICE}
${DISCOUNT_MEAL_RATE * 100}% off orders of $${DISCOUNT_MEAL_THRESHOLD} or more!`;

alert("Welcome to Joe's Hotdogs!!\n" + menuText + "\n" + specialText);

let orderQuantities = {
    "Hotdogs": 0,
    "French Fries": 0,
    "Drinks": 0
};

for (let item in menuPrices) {
    let qty = prompt(`How many ${item} would you like?`);
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
let subtotal = (numMeals * MEAL_DEAL_PRICE) + 
               ((numDogs - numMeals) * menuPrices["Hotdogs"]) + 
               ((numFries - numMeals) * menuPrices["French Fries"]) + 
               ((numSoda - numMeals) * menuPrices["Drinks"]);

let originalSubtotal = subtotal;

let discount = 0;
if (subtotal >= DISCOUNT_MEAL_THRESHOLD) {
    discount = subtotal * DISCOUNT_MEAL_RATE;
    subtotal -= discount;
}

let tax = subtotal * TAX_RATE;
let finalTotal = subtotal + tax;

document.body.innerHTML = `
    <h1>Joe's Hotdog Receipt (Version 2)</h1>
    <div class="receipt">
        <p>Ordered Food: </p>
        <ul>
            <li>Hotdogs: ${numDogs} ($${showMoney(numDogs * menuPrices["Hotdogs"])})</li>
            <li>Fries: ${numFries} ($${showMoney(numFries * menuPrices["French Fries"])})</li>
            <li>Sodas: ${numSoda} ($${showMoney(numSoda * menuPrices["Drinks"])})</li>
        </ul>
        <hr>
        <p>Subtotal (w/out Discount): $${showMoney(originalSubtotal)}</p>
        <p>Discount: -$${showMoney(discount)}</p>
        <p>New Subtotal: $${showMoney(subtotal)}</p>
        <p>Tax (${TAX_RATE * 100}%): $${showMoney(tax)}</p>
        <h2>Total: $${showMoney(finalTotal)}</h2>
    </div>
`;