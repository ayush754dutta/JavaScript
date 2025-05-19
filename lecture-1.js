// Lecture 1 JS: Introduction

// 1. first program:

console.log("Hello World!");

function addThreeNum(a, b, c) {
  return a + b + c;
}

console.log(addThreeNum(1, 2, 54));

// Variables in JS: JS is a dynamic typed language. while c c++ java are static typed language.

/*
variable is container to store value. This value can be of any datatype.

keywords to declare varisble are var, let and const

rules to declare variable:

1. dont use keyword
2. dont start  with a number

// difference b/w let const and var

const: used to declare constant variable. the value can be of any datatype. it needs to instantiate

let: can be used to declare dynamic variable

let is block scoped: eg you can declare same variable with same identifier inside a code block and outside code block, wont give error.
*/

let a = 66;

console.log(a);

a = "ayush dutta";
console.log(a);

// let is blocked scoped: below

let b = "ayush";
{
  let b = 25;
  console.log(b);
}

console.log(b);

// Datatypes in JS:

/*
Primitives:
nnbbssu

number null boolean bigint  string symbol undefined
*/

let z = 6;
let d = null;
let r = true;
let v = BigInt("567");
let s = "hello world";
let g = Symbol("i am symbol");
let u = undefined;

console.log(z, d, r, v, s, g, u);

// objects;

const obj = {
  a: "ayush dutta",
  b: 6,
  c: true,
};

console.log(obj);
console.log(obj.b);
console.log(obj["a"]);

// practice set

// Q1
let numStr = "hello";
let num = 6;
console.log(numStr + num);
// Q2
console.log(typeof (numStr + num));

// Q3

const obj_1 = {};

// Q4
obj_1.z = 1;
console.log(obj_1);

// Q5
const dictionary = {
  hello: "A way to greet",
  reside: "to live somewhere",
  torment: "To torture someone",
};

console.log(dictionary);
