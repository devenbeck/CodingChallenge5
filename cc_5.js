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

//Task 5: Filter Method
//Scenario: Product Availability 
let inventory = [5,0,12,8,0]; //array of inventory
let instock = inventory.filter(stock => stock > 0); //filter out all the out of stock ones (the ones that say 0)
console.log(instock);   //log result

//Task 6: Reduce Method
//Scenario: Revenue Calculation
let sales = [500,300,200,400];    //array of sales
let totalRevenue = sales.reduce((total, sales) => total + sales, 0);   //reduces list/array to one value
                                                                //total is originally set at zero and then adds up
console.log (totalRevenue);

//Task 7: find () Method
//Scenario: Customer Search
let customers = ["Alice", "Bob", "Charlie", "David"];  //array of customer names
let specificCustomer = customers.find(c => c === "Charlie");  //finding Charlie specifically
console.log(specificCustomer);   //logging result

//Task 8: Function Declaration
// Scenario: Tax Calculation
function calculateTax (amount, taxRate) {
    let tax = amount * taxRate;
    console.log (`The calculated tax is: $${tax}`);    //log using template literal
    return tax;
}    
calculateTax(100, 0.07);   //7% tax on $100 is $7

//Task 9: Function Expression
//Scenario: Discount Application
const applyDiscount = function(price, discount){     //function expression declared
let discountedPrice = price - (price * discount);
console.log(`Discounted Price: $${discountedPrice}`);   //template literal
return discountedPrice;
};
applyDiscount(100, 0.1);    //10% off $100

//Task 10: Arrow Function
// Scenario: Loyalty Points
const calculatePoints = (purchaseAmount) => {
    let points = (purchaseAmount / 10);
    console.log(`Earned points: ${points}`);
    return points;
};
calculatePoints(500);
