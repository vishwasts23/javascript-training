// ==========================================
// JavaScript Tasks – Loops & Functions
// Name: Vishwas T S
// Date:
// ==========================================



// ==========================================
// 1. Print Numbers
// ==========================================


// Print numbers from 1 to 20 using for loop
console.log("1.Numbers from 1 to 20 :");

for(let i = 1; i <= 20; i++)
{
    console.log(i);
}



// ==========================================
// 2. Odd Numbers
// ==========================================


// Print odd numbers from 1 to 50
console.log("2.Odd numbers from 1 to 50 :");

for(let i = 1; i <= 50; i++)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}




// ==========================================
// 3. Multiplication Table
// ==========================================
console.log("3.Multiplication table of 7 :");

// Multiplication table of 7

for(let i = 1; i <= 10; i++)
{
    console.log("7 x " + i + " = " + (7 * i));
}




// ==========================================
// 4. Reverse Counting
// ==========================================
console.log("4.Numbers from 20 to 1 :");

// Print numbers from 20 to 1 using while loop

let num = 20;

while(num >= 1)
{
    console.log(num);
    num--;
}




// ==========================================
// 5. Sum of Numbers
// ==========================================

console.log("5.Sum of numbers from 1 to 100 :");
// Find total sum from 1 to 100

let sum = 0;

for(let i = 1; i <= 100; i++)
{
    sum = sum + i;
}

console.log(sum);

// Output: 5050




// ==========================================
// 6. Array Loop
// ==========================================
console.log("6.Fruits in the array :");

// Print all array values

let fruits = ["apple","banana","orange","grapes"];

for(let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}




// ==========================================
// 7. Count Even Numbers
// ==========================================

console.log("7.Count of even numbers from 1 to 50 :");
// Count even numbers between 1 to 50

let evenCount = 0;

for(let i = 1; i <= 50; i++)
{
    if(i % 2 == 0)
    {
        evenCount++;
    }
}

console.log(evenCount);

// Output: 25




// ==========================================
// 8. Star Pattern
// ==========================================

console.log("8.Star pattern :");
// Print star pattern

for(let i = 1; i <= 5; i++)
{
    let star = "";

    for(let j = 1; j <= i; j++)
    {
        star = star + "*";
    }

    console.log(star);
}




// ==========================================
// 9. Simple Function
// ==========================================

console.log("9.Welcome message :");
// Function to print welcome message

function welcome()
{
    console.log("Welcome to JavaScript");
}

welcome();




// ==========================================
// 10. Function with Parameter
// ==========================================

console.log("10.Greeting message :");
// Function with parameter

function greet(name)
{
    console.log("Hello " + name);
}

greet("Naveen");




// ==========================================
// 11. Add Two Numbers
// ==========================================

console.log("11.Addition of two numbers :");
// Function to add two numbers

function add(a, b)
{
    return a + b;
}

console.log(add(10,20));

// Output: 30




// ==========================================
// 12. Salary Bonus
// ==========================================

console.log("12.Salary after bonus :");
// Function to add salary bonus

function salaryBonus(salary, bonus)
{
    return salary + bonus;
}

console.log(salaryBonus(50000,5000));

// Output: 55000




// ==========================================
// 13. Object Loop
// ==========================================
console.log("13.Student details :");

// Print object keys and values using for in

let student = {
    name : "Rahul",
    course : "JavaScript",
    marks : 95
};

for(let key in student)
{
    console.log(key + " : " + student[key]);
}




// ==========================================
// 14. Find Largest Number
// ==========================================

console.log("14.Largest number between 10 and 50 :");
// Function to find largest number

function largest(a, b)
{
    if(a > b)
    {
        return a;
    }
    else
    {
        return b;
    }
}

console.log(largest(10,50));

// Output: 50




// ==========================================
// 15. Mini Employee Task
// ==========================================
console.log("15.Employee details and salary after bonus :");

// Employee object

let employee = {
    name : "Vishwas",
    department : "Testing",
    salary : 50000
};


// Function to calculate salary after bonus

function finalSalary(salary, bonus)
{
    return salary + bonus;
}


// Print employee details

console.log("Employee Name : " + employee.name);

console.log("Department : " + employee.department);

console.log("Salary : " + employee.salary);

console.log("Salary after bonus : " + finalSalary(employee.salary,5000));




// ==========================================