// ==========================================
// JavaScript Tasks – Real Time Practice
// Name: Vishwas T S
// Date: 14/05/2026
// ==========================================



// ==========================================
// Task 1 — Student Registration Form
// ==========================================
console.log("Task 1 — Student Registration Form :");

// Import prompt-sync

const prompt = require("prompt-sync")();


// Taking user inputs

let studentName = prompt("Enter Student Name: ");

let department = prompt("Enter Department: ");

let age = prompt("Enter Age: ");


// Printing details using template string

console.log(`Welcome ${studentName}`);

console.log(`Department: ${department}`);

console.log(`Age: ${age}`);




// ==========================================
// Task 2 — ATM Withdrawal System
// ==========================================
console.log("Task 2 — ATM Withdrawal System :");

let balance = 100000;

let withdrawAmount = 5000;


if(withdrawAmount >= 100 && withdrawAmount <= balance)
{
    console.log("Transaction Successful");
}
else
{
    console.log("Insufficient Balance");
}




// ==========================================
// Task 3 — Swiggy Discount Checker
// ==========================================
console.log("Task 3 — Swiggy Discount Checker :");

let orderAmount = 600;


orderAmount > 499
?
console.log("Free Delivery Available")
:
console.log("Delivery Charges Applied");




// ==========================================
// Task 4 — Instagram Login System
// ==========================================
console.log("Task 4 — Instagram Login System :");

let username = "admin";

let password = "1234";


if(username == "admin")
{
    if(password == "1234")
    {
        console.log("Login Success");
    }
    else
    {
        console.log("Wrong Password");
    }
}
else
{
    console.log("Invalid Username");
}




// ==========================================
// Task 5 — Traffic Signal System
// ==========================================
console.log("Task 5 — Traffic Signal System :");

let signal = "green";


switch(signal)
{
    case "red":
        console.log("STOP");
        break;

    case "yellow":
        console.log("READY");
        break; 

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid Signal");
}




// ==========================================
// Task 6 — Employee Salary Calculator
// ==========================================
console.log("Task 6 — Employee Salary Calculator :");

// Function to calculate salary

function salaryCalculation(salary,bonus)
{
    return salary + bonus;
}


console.log(salaryCalculation(25000,5000));

// Output: 30000




// ==========================================
// Task 7 — E-Commerce Cart Total
// ==========================================
console.log("Task 7 — E-Commerce Cart Total :");

// Product price array

let prices = [100,200,300,400];

let total = 0;


// Finding total

for(let i = 0; i < prices.length; i++)
{
    total = total + prices[i];
}


// Finding average

let average = total / prices.length;


console.log("Total Price: " + total);

console.log("Average Price: " + average);




// ==========================================
// Task 8 — WhatsApp Contact Book
// ==========================================
console.log("Task 8 — WhatsApp Contact Book :");

// Contact object

let contact = {

    name : "Vishwas T S",

    phone : 9606208789,

    status : "Available"
};


// Printing details dynamically

for(let key in contact)
{
    console.log(key + " : " + contact[key]);
}




// ==========================================
// Task 9 — Movie Ticket Booking
// ==========================================
console.log("Task 9 — Movie Ticket Booking :");

// Payment function

function payment()
{
    console.log("Payment Successful");
}


// Ticket booking function

function bookTicket(callback)
{
    console.log("Ticket Booked");

    callback();
}


// Calling function

bookTicket(payment);




// ==========================================
// Task 10 — Food Delivery Time Tracker
// ==========================================
console.log("Task 10 — Food Delivery Time Tracker :");

// Generator function

function* deliveryStatus()
{
    yield "Order Confirmed";

    yield "Preparing Food";

    yield "Out for Delivery";

    yield "Delivered";
}


let order = deliveryStatus();


console.log(order.next().value);

console.log(order.next().value);

console.log(order.next().value);

console.log(order.next().value);




// ==========================================