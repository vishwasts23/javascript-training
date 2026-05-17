// ==========================================
// Name: Vishwas T S
// Date:15/05/2026


// ==========================================
// 1. Student Attendance System
// ==========================================
console.log("1. Student Attendance System");

// Present students array

let presentStudents = ["Rahul","Naveen","Kiran"];


// Absent students array

let absentStudents = ["Amit","Rohit"];


// Merge arrays using spread operator

let allStudents = [...presentStudents,...absentStudents];


// Add one new student

allStudents.push("Vishwas");


// Print final array

console.log(allStudents);


// Output:
// ["Rahul","Naveen","Kiran","Amit","Rohit","Vishwas"]





// ==========================================
// 2. E-Commerce Cart
// ==========================================
console.log("2. E-Commerce Cart");

// Mobile object

let mobile = {

    brand : "Samsung",

    price : 25000
};


// Charger object

let charger = {

    type : "Fast Charger",

    warranty : "1 Year"
};


// Merge objects using spread operator

let productDetails = {

    ...mobile,

    ...charger,

    deliveryDate : "20-May-2026"
};


// Print final object

console.log(productDetails);


// Output:
// {
//   brand : "Samsung",
//   price : 25000,
//   type : "Fast Charger",
//   warranty : "1 Year",
//   deliveryDate : "20-May-2026"
// }





// ==========================================
// 3. Food Delivery App
// ==========================================
console.log("3. Food Delivery App");

// Function using rest operator

function orderFood(...items)
{
    console.log("Total items ordered : " + items.length);

    console.log("First item : " + items[0]);

    console.log("Last item : " + items[items.length - 1]);
}


// Calling function

orderFood("Pizza","Burger","Pasta","Juice");


// Output:
// Total items ordered : 4
// First item : Pizza
// Last item : Juice





// ==========================================
// 4. Employee Salary Filter
// ==========================================
console.log("4. Employee Salary Filter");

// Employee array

let employees = [

    {
        name : "Rahul",
        salary : 40000
    },

    {
        name : "Vishwas",
        salary : 60000
    },

    {
        name : "Kiran",
        salary : 75000
    }

];


// Filter employees whose salary is above 50000

let filteredEmployees = employees.filter(emp => emp.salary > 50000);


// Print filtered employees

console.log(filteredEmployees);


// Output:
// [
//   { name : "Vishwas", salary : 60000 },
//   { name : "Kiran", salary : 75000 }
// ]





// ==========================================
// 5. Online Game Score Board
// ==========================================
console.log("5. Online Game Score Board");

// Scores array

let scores = [100,200,150,250];


// Find total score using reduce()

let totalScore = scores.reduce((total,score) => total + score,0);


// Print total score

console.log("Total Score : " + totalScore);


// Output:
// Total Score : 700

// ==========================================