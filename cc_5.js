// Task 1: Object Properties
//Scenario: Customer Profile
const customer = {    //customer object created
    name: "John Doe", //beginning of listed properties
    age: 35,
    email: "john.doe@email.com"
}; //finalized object

console.log(`Name: ${customer.name}`); //logging first property with a template literal
console.log(`Age: ${customer.age}`); //logging second property with a template literal
console.log(`Email: ${customer.email}`); //logging third property with a template literal

//Task 2: Object Methods
//Scenario: Order Details
const order = {           //object order declared
    orderID: 12345,       //beginning of properties listed     
    totalAmount: 150,
    status: "Processing",
    displayOrder() {     // adding a display order method to log details 
        console.log(`Order ID: ${this.orderID}, Total Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
}; //log of order with details
order.displayOrder();

//Task 3: Array Manipulation (push, pop, shift, unshift)
//Scenario: Shopping Cart
let cartItems = ["mouthwash", "protein shakes", "salmon"];   //array for cart
cartItems.push("mayonaise");     //adding a new item
cartItems.pop();     //removing last item from array
cartItems.unshift("ketchup");         //adding new item to beginning of array
cartItems.shift();          //removes first item from array
console.log(cartItems);

//Task 4: Map Method
//Scenario: Price Adjustments
let prices = [100, 200, 300];     //array of prices
const discount = 0.9;    //10% discount
let discountedPrices = prices.map(prices => prices * discount)   //map method helps you quickly apply transformation to every item in an array
console.log (discountedPrices);    //log result

