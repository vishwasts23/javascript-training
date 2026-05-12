// ==========================================
// JavaScript Tasks – Type Casting & Flow Control
// Name: Vishwas T S
// Date: 11/05/2026
// ==========================================



// ==========================================
// Task 1 – Predict the Output
// ==========================================


// Q1
// Prediction: 105

console.log("10" + 5);

// Actual Output: 105
// Datatype: string


// Q2
// Prediction: 11

console.log(10 + true);

// Actual Output: 11
// Datatype: number


// Q3
// Prediction: 0

console.log(false + null);

// Actual Output: 0
// Datatype: number


// Q4
// Prediction: Helloundefined

console.log("Hello" + undefined);

// Actual Output: Helloundefined
// Datatype: string


// Q5
// Prediction: 1,25

console.log([1,2] + 5);

// Actual Output: 1,25
// Datatype: string




// ==========================================
// Task 2 – Implicit Type Casting
// ==========================================


// String + Number

let a = "100" + 20;
console.log(a);
console.log(typeof a);

// Output: 10020
// Datatype: string


// Boolean + Number

let b = true + 10;
console.log(b);
console.log(typeof b);

// Output: 11
// Datatype: number


// Array + String

let c = [1,2] + "hello";
console.log(c);
console.log(typeof c);

// Output: 1,2hello
// Datatype: string


// Object + Number

let d = {} + 5;
console.log(d);
console.log(typeof d);

// Output: [object Object]5
// Datatype: string


// Null + Number

let e = null + 10;
console.log(e);
console.log(typeof e);

// Output: 10
// Datatype: number




// ==========================================
// Task 3 – Explicit Type Casting
// ==========================================


// Convert "500" into Number

let num1 = Number("500");
console.log(num1);

// Output: 500


// Convert true into Number

let num2 = Number(true);
console.log(num2);

// Output: 1


// Convert false into Number

let num3 = Number(false);
console.log(num3);

// Output: 0


// Convert null into Number

let num4 = Number(null);
console.log(num4);

// Output: 0


// Convert "abc" into Number

let num5 = Number("abc");
console.log(num5);

// Output: NaN


// Convert [100] into Number

let num6 = Number([100]);
console.log(num6);

// Output: 100




// ==========================================
// Task 4 – Boolean Constructor
// ==========================================


console.log(Boolean(""));

// Output: false


console.log(Boolean("javascript"));

// Output: true


console.log(Boolean(0));

// Output: false


console.log(Boolean(1));

// Output: true


console.log(Boolean(null));

// Output: false


console.log(Boolean(undefined));

// Output: false


console.log(Boolean([]));

// Output: true


console.log(Boolean({}));

// Output: true




// ==========================================
// Task 5 – Student Pass or Fail
// ==========================================


let mark = 45;

if(mark > 35)
{
    console.log("Pass");
}
else
{
    console.log("Fail");
}

// Output: Pass




// ==========================================
// Task 6 – Voting Eligibility
// ==========================================


let age = 20;

if(age >= 18)
{
    console.log("Eligible");
}
else
{
    console.log("Not Eligible");
}

// Output: Eligible




// ==========================================
// Task 7 – Greatest Number
// ==========================================


let numA = 50;
let numB = 80;
let numC = 30;

if(numA > numB && numA > numC)
{
    console.log("A is greatest");
}
else if(numB > numA && numB > numC)
{
    console.log("B is greatest");
}
else
{
    console.log("C is greatest");
}

// Output: B is greatest




// ==========================================
// Task 8 – Traffic Light System
// ==========================================


let signal = "red";

switch(signal)
{
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

// Output: Stop




// ==========================================
// Task 9 – Login System
// ==========================================


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
        console.log("Invalid Password");
    }
}
else
{
    console.log("Invalid Username");
}

// Output: Login Success




// ==========================================
// Task 10 – Session Finder
// ==========================================


let hour = 14;

if(hour >= 1 && hour <= 12)
{
    console.log("Morning");
}
else if(hour >= 13 && hour <= 15)
{
    console.log("Afternoon");
}
else if(hour >= 16 && hour <= 19)
{
    console.log("Evening");
}
else if(hour >= 20 && hour <= 24)
{
    console.log("Night");
}
else
{
    console.log("Invalid Time");
}

// Output: Afternoon




// ==========================================
// Bonus Challenge 🔥
// ==========================================


// Q1
// Prediction: 2

console.log(true + true);

// Actual Output: 2


// Q2
// Prediction: 3

console.log("5" - 2);

// Actual Output: 3


// Q3
// Prediction: 52

console.log("5" + 2);

// Actual Output: 52


// Q4
// Prediction: 1

console.log(null + 1);

// Actual Output: 1


// Q5
// Prediction: NaN

console.log(undefined + 1);

// Actual Output: NaN


// Q6
// Prediction: true

console.log(Boolean(" "));

// Actual Output: true


// Q7
// Prediction: 1

console.log(Number(true));

// Actual Output: 1
