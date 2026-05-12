// ==========================================
// JavaScript Training Tasks
// Name:Vishwas T S
// Date:6/05/2026
// ==========================================


// ==========================================
// Section 1: Variables (1–8)
// ==========================================


// Q1
// Prediction: 15

var a = 10;
a = 15;
console.log(a);

// Actual Output: 15


// Q2
// Prediction: Error

// let b = 20;
// let b = 30;

// Actual Output: Identifier 'b' has already been declared


// Q3
// Prediction: 50

const c = 50;
console.log(c);

// Actual Output: 50


// Q4
// Prediction: Error

// const x = 10;
// x = 20;

// Actual Output: Assignment to constant variable


// Q5
// Prediction: 10

var p = 5;
var p = 10;
console.log(p);

// Actual Output: 10


// Q6
// Prediction: 35

let q = 25;
q = q + 10;
console.log(q);

// Actual Output: 35


// Q7
// Prediction: 10

const r = 7;
console.log(r + 3);

// Actual Output: 10


// Q8
// Fill correct keyword

let aa = 10;

console.log(aa);



// ==========================================
// Section 2: Console Methods (9–12)
// ==========================================


// Q9
// Which method prints normal output?

console.log("This is normal output");

// console.log() prints normal messages.


// Q10
// Which method shows warning?

console.warn("This is warning message");

// console.warn() shows warning message.


// Q11
// Which method shows error?

console.error("This is error message");

// console.error() shows error message.


// Q12
// What does console.clear() do?

console.clear();

// Clears browser console.


// ==========================================
// Section 3: Data Types (13–18)
// ==========================================


// Q13
// Prediction: string

let str = "hello";
console.log(typeof str);

// Actual Output: string


// Q14
// Prediction: number

let num = 100;
console.log(typeof num);

// Actual Output: number


// Q15
// Prediction: boolean

let bool = false;
console.log(typeof bool);

// Actual Output: boolean


// Q16
// Prediction: undefined

let d;
console.log(d);

// Actual Output: undefined


// Q17
// What is type of null?

console.log(typeof null);

// Actual Output: object


// Q18
// Convert string to number

let convertedNumber = Number("25");
console.log(convertedNumber);

// Actual Output: 25


// ==========================================
// Section 4: Arrays (19–24)
// ==========================================


// Q19
// Create array of 3 fruits

let fruits = ["apple", "banana", "mango"];
console.log(fruits);



// Q20
// Prediction: b

let arr1 = ["a", "b", "c"];
console.log(arr1[1]);

// Actual Output: b


// Q21
// Prediction: z

let arr2 = ["x", "y", "z"];
console.log(arr2[arr2.length - 1]);

// Actual Output: z


// Q22
// How to get first element?

console.log(arr2[0]);

// Actual Output: x


// Q23
// Prediction: 2

let arr3 = ["apple", "banana"];
console.log(arr3.length);

// Actual Output: 2


// Q24
// Add new element to array

arr3.push("mango");
console.log(arr3);

// Actual Output: ["apple", "banana", "mango"]


// ==========================================
// Section 5: Objects (25–28)
// ==========================================


// Q25
// Create object with name & age

let person = {
    name: "Naveen",
    age: 25
};

console.log(person);



// Q26
// Prediction: Naveen

let obj1 = { name: "Naveen" };
console.log(obj1.name);

// Actual Output: Naveen


// Q27
// Prediction: banana

let obj2 = {
    fruits: ["apple", "banana"]
};

console.log(obj2.fruits[1]);

// Actual Output: banana


// Q28
// How to access last element inside object array?

console.log(obj2.fruits[obj2.fruits.length - 1]);

// Actual Output: banana


// ==========================================
// Section 6: Arithmetic Operators (29–32)
// ==========================================


// Q29
// Prediction: 8

console.log(5 + 3);

// Actual Output: 8


// Q30
// Prediction: 1

console.log(10 % 3);

// Actual Output: 1


// Q31
// Prediction: 8

console.log(2 ** 3);

// Actual Output: 8


// Q32
// Prediction: 5

console.log(10 / 2);

// Actual Output: 5


// ==========================================
// Section 7: Increment / Decrement (33–36)
// ==========================================


// Q33
// Prediction: 6

let a1 = 5;
a1++;
console.log(a1);

// Actual Output: 6


// Q34
// Prediction: 6 5

let b1 = 5;
let c1 = b1++;
console.log(b1, c1);

// Actual Output: 6 5


// Q35
// Prediction: 6 6

let x1 = 5;
let y1 = ++x1;
console.log(x1, y1);

// Actual Output: 6 6


// Q36
// Prediction: 2 3

let m = 3;
let n = m--;
console.log(m, n);

// Actual Output: 2 3


// ==========================================
// Section 8: Comparison & Logical (37–39)
// ==========================================


// Q37
// Prediction: true

console.log(5 == "5");

// Actual Output: true


// Q38
// Prediction: false

console.log(5 === "5");

// Actual Output: false


// Q39
// Prediction: true

console.log(true && false || true);

// Actual Output: true


// ==========================================
// Section 9: Ternary Operator (40)
// ==========================================


// Q40
// Prediction: Yes

5 > 3 ? console.log("Yes") : console.log("No");

// Actual Output: Yes