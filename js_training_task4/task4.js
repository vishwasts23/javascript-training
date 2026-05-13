// ==========================================
// JavaScript Tasks – Functions Advanced
// Name: Vishwas T S
// Date: 13/05/2026
// ==========================================



// ==========================================
// Task 1 — Basic Function
// ==========================================

console.log("Task 1 — Basic Function :");
// Function to welcome user

function welcomeUser(name)
{
    console.log("Welcome " + name);
}

welcomeUser("Vishwas");

// Output: Welcome Vishwas




// ==========================================
// Task 2 — Parameter + Return
// ==========================================

console.log("Task 2 — Parameter + Return :");
// Function to return square value

function squareNumber(num)
{
    return num * num;
}

console.log(squareNumber(8));

// Output: 64




// ==========================================
// Task 3 — Object Function
// ==========================================
console.log("Task 3 — Object Function :");

// Employee object

let employee = {
    name : "Vishwas",
    salary : 50000
};


// Function to add bonus

function employeeBonus(bonus)
{
    console.log(employee.name);

    console.log(employee.salary + bonus);
}

employeeBonus(5000);

// Output:
// Vishwas
// 55000


console.log("Task 4 — Scope Checking :");   

// ==========================================
// Task 4 — Scope Checking
// ==========================================


function checkScope()
{
    var a = 10;

    let b = 20;

    const c = 30;

    console.log("Inside Function:");

    console.log(a);

    console.log(b);

    console.log(c);
}


checkScope();


// Trying to access outside function
/*
console.log("Outside Function:");

console.log(a);

console.log(b);

console.log(c);
*/

// Output:
//
// Inside Function:
// 10
// 20
// 30
//
// Outside Function:
// ReferenceError: a is not defined
//
// ReferenceError: b is not defined
//
// ReferenceError: c is not defined



// ==========================================
// Task 5 — Arrow Function
// ==========================================
console.log("Task 5 — Arrow Function :");

// Arrow function

const add = (a,b) =>
{
    console.log(a + b);
};

add(10,20);

// Output: 30




// ==========================================
// Task 6 — Callback Function
// ==========================================
console.log("Task 6 — Callback Function :");

// Multiply function

function multiply(a,b)
{
    return a * b;
}


// Calculator function

function calculator(callback,a,b)
{
    console.log(callback(a,b));
}

calculator(multiply,5,2);

// Output: 10




// ==========================================
// Task 7 — Generator Function
// ==========================================
console.log("Task 7 — Generator Function :");

// Generator function

function* offers()
{
    yield "80% OFF";

    yield "Free Delivery";

    yield "Cashback";
}


let result = offers();

console.log(result.next().value);

console.log(result.next().value);

console.log(result.next().value);


// Output:
// 80% OFF
// Free Delivery
// Cashback




// ==========================================
// Task 8 — Default Parameter
// ==========================================
console.log("Task 8 — Default Parameter :");

// Function with default parameter

function student(name,course = "JavaScript")
{
    console.log(name);

    console.log(course);
}

student("Vishwas");

// Output:
// Vishwas
// JavaScript




// ==========================================
// Task 9 — Currying
// ==========================================
console.log("Task 9 — Currying :");

// Currying function

function multi(a)
{
    return function(b)
    {
        return function(c)
        {
            return a * b * c;
        };
    };
}

console.log(multi(2)(3)(4));

// Output: 24




// ==========================================
// Task 10 — Spread Operator
// ==========================================
console.log("Task 10 — Spread Operator :");

// Merge arrays using spread operator

let arr1 = [1,2,3];

let arr2 = [4,5,6];

let mergedArray = [...arr1,...arr2];

console.log(mergedArray);

// Output:
// [1,2,3,4,5,6]




// ==========================================
// Task 11 — Object Spread
// ==========================================
console.log("Task 11 — Object Spread :");

// Merge objects using spread operator

let obj1 = {
    name : "Vishwas"
};

let obj2 = {
    role : "Developer"
};

let mergedObject = {
    ...obj1,
    ...obj2
};

console.log(mergedObject);

// Output:
// { name:"Vishwas", role:"Developer" }




// ==========================================
// Task 12 — Rest Operator
// ==========================================
console.log("Task 12 — Rest Operator :");

// Function using rest operator

function numbers(...num)
{
    console.log(num);

    let sum = 0;

    for(let i = 0; i < num.length; i++)
    {
        sum = sum + num[i];
    }

    console.log(sum);
}

numbers(1,2,3,4);

// Output:
// [1,2,3,4]
// 10




// ==========================================
// Mini Challenge Student Management System
// ==========================================

console.log("Mini Challenge Student Management System :");
// Student array

let students = [];


// Function to add student

function addStudent(name,marks)
{
    let student = {
        name,
        marks
    };

    students.push(student);
}


// Function to print students

function printStudents()
{
    console.log(students);
}


// Callback function for bonus marks

function bonusMarks(mark)
{
    return mark + 5;
}


// Function to calculate marks

function calculateMarks(callback)
{
    let updatedStudents = students.map(student => ({
        ...student,
        marks : callback(student.marks)
    }));

    console.log(updatedStudents);
}


// Rest operator function

function totalMarks(...marks)
{
    let total = 0;

    for(let mark of marks)
    {
        total += mark;
    }

    console.log("Total Marks : " + total);
}


// Add students

addStudent("Vishwas",90);

addStudent("Bing",85);


// Print students

printStudents();


// Add bonus marks

calculateMarks(bonusMarks);


// Calculate total marks

totalMarks(90,85);


// ==========================================