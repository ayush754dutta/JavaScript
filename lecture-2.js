// Expression and operators:

console.log("operators in JS");

let a = 5;
let b = 46;

// Arithematic operators:
console.log("a+b", a + b);
console.log("a-b", a - b);
console.log("a*b", a * b);
console.log("a/b", a / b);
console.log("a%b", a % b);
console.log(a++); //first prints a then increase
console.log(a);
console.log(++a); //first increases then print

// Assignment operator:

a += 5; // a = a + 5;

console.log(a);

// comparison operators:

let q = 6;
let i = 4;

console.log(q === i);
console.log(q !== i);
console.log(q > i);
console.log(q < i);
console.log(q <= i);
console.log(q >= i);

// Logical Operator: &&, ||, !

// Comments:

// Single line comment

/*
This

is multi 
line comment
*/

////////////////////////////////////////////////////

// JS Conditional expression:

let z = "Hello There";

let age = 25;

if (age > 18) {
  console.log(z);
} else {
  console.log("Chal be hatt!");
}

/*
// similarly there is if-else-if ladder.

// when there are conditionals without else. both if statement executes.

// when there are two conditionals of different basis, we use 2 or multiple if statement for each condition. 
*/

if (age < 9) {
  console.log("you can drive a bicycle");
} else if (age > 9 && age < 18) {
  console.log("you can drive electric cycle");
} else {
  console.log("you can drive scooter");
}

// Switch Statement:

switch (age) {
  case 15:
    console.log("i am 15");
    break;

  case 8:
    console.log("I am 8");
    break;

  case 25:
    console.log("I am 25");
    break;

  default:
    console.log("i am invalid");
    break;
}

// Ternary Operator:

let number = 52;
let result = number === 25 ? true : false;

console.log(result);
