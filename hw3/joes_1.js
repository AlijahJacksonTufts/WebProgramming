const PRICE_HOTDOG = 5.25;
const PRICE_FRIES = 3.75;
const PRICE_SODA = 2.50;
const MEAL_DEAL_PRICE = 10.00;
const DISCOUNT_MEAL_RATE = 0.1;
const DISCOUNT_MEAL_THRESHOLD = 30.00; 
const TAX_RATE = 0.0625;

const menu = `
Hotdogs: $${PRICE_HOTDOG}
Fries: $${PRICE_FRIES}
Sodas: $${PRICE_SODA}`;

let special = `
Meal Deal: 1 Dog, 1 Fry, 1 Drink for $${MEAL_DEAL_PRICE}
${DISCOUNT_MEAL_RATE * 100}% off orders of $${DISCOUNT_MEAL_THRESHOLD} or more!`;

alert("Welcome to Joe's Hotdogs!!\n" + menu + "\n" + special);


let numDogs = parseInt(prompt("How many hotdogs would you like?")) || 0;
let numFries = parseInt(prompt("How many orders of French fries?")) || 0;
let numSoda = parseInt(prompt("How many sodas?")) || 0;

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

let numMeals = Math.min(numDogs, numFries, numSoda);
let subtotal = (numMeals * MEAL_DEAL_PRICE) + 
               ((numDogs - numMeals) * PRICE_HOTDOG) + 
               ((numFries - numMeals) * PRICE_FRIES) + 
               ((numSoda - numMeals) * PRICE_SODA);

let originalSubtotal = subtotal;

let discount = 0;
if (subtotal >= DISCOUNT_MEAL_THRESHOLD) {
    discount = subtotal * DISCOUNT_MEAL_RATE;
    subtotal -= discount;
}

let tax = subtotal * TAX_RATE;
let finalTotal = subtotal + tax;

document.body.innerHTML = `
    <h1>Joe's Hotdog Receipt (Version 1)</h1>
    <div class="receipt">
        <p>Ordered Food: </p>
        <ul>
            <li>Hotdogs: ${numDogs} ($${showMoney(numDogs * PRICE_HOTDOG)})</li>
            <li>Fries: ${numFries} ($${showMoney(numFries * PRICE_FRIES)})</li>
            <li>Sodas: ${numSoda} ($${showMoney(numSoda * PRICE_SODA)})</li>
        </ul>
        <hr>
        <p>Subtotal (w/out Discount): $${showMoney(originalSubtotal)}</p>
        <p>Discount: -$${showMoney(discount)}</p>
        <p>New Subtotal: $${showMoney(subtotal)}</p>
        <p>Tax (${TAX_RATE * 100}%): $${showMoney(tax)}</p>
        <h2>Total: $${showMoney(finalTotal)}</h2>
    </div>
`;