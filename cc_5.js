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