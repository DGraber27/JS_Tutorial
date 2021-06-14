//document.write('hellow world);
//alert('hello world');
//console.log('hello world');

let myName = "Taco Baco Bell";
let address, zip, state;
address = "101 main street";
zip = "1234";
state = "hell";
myName = "Bob";
console.log(myName, address, zip + ", " + state);


//cannot start with number must start with letter, $, or _
//camelCase or underscore
//no keywords
let random123_$ = 'random';
console.log(random123_$);

//LET VS CONST VS VAR

//using var
var value = "some value";
value = "something else";

//using let
let firstName = "john";
firstName = "peter";

//using Constant - can't re-assign
const lastName = "jordan";

console.log(value);
console.log(firstName);
console.log(lastName);

// "" or ''
const first_Name = 'john';
const last_Name = "duck";

//String Concatenation - combine string values
// `` - Backticks (template strings) easier option

const anotherName = "john";
const secondName = "john";
let fullName = anotherName + ' ' + secondName;
console.log('Hello there your full name is : ' + fullName);

const website = 'google';
const url = 'https://www.' + website + '.com';
console.log(url);

//Numbers
//Loosely Typed = don't declare type

const number = 4;
const number2 = 4.53453;
// let taco = 4.135;
// taco = 'are great';
console.log(number);
console.log(number2);

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;
const mod = number % number2;


console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
console.log(mod);

//Numbers
// +=, -=, *=, ++, --, %

let number1 = 40;
number1 +=5;
number1 += 5;
number1 += 5;
number1 += 5;
number1 ++;
number1 --;
number1 --;
console.log(number1);
let number3 = 40;
number3 -=5;
number3 -= 5;
number3 -= 5;
console.log(number3);
let number4 = 40;
number4 *=3;
console.log(number4);

//implicit type conversion
//Javascript will try to help you out if you use numbers as strings but the best way is to use numbers when you need numbers

const num1 = 5;
const num2 = 10;
const result = num1 + num2;
console.log(result);

let num3 = 10;
let num4 = '23';
//auto type conversion
const result2 = num3 - num4;
console.log(result2);
//this will read as concatination since num4 is a string
const result3 = num3 + num4;
console.log(result3);


//Data Types - 7 total

//Primitive - String, Number, Boolean, Null, Undefined, Symbol
//Object - Arrays, Functions, Objects

//typeof -operator (typeof variable name) (typeof value)

//String
const text = 'some text';
//Number
let value1 = true;
//Boolean
const isJavaScript = true;
//Null
const result5 = null;
//Undefined
let name8;
//Symbol (ES6)

// typeof variable
console.log(typeof text);
//typeof value
console.log(typeof true);
console.log(typeof numb);
console.log(typeof value1);
console.log(typeof null);
console.log(typeof result5);
console.log(typeof name8);
