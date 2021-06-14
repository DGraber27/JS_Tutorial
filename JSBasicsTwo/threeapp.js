//Truthy and Falsy
//"", '', ``, 0, -0, NaN, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

const text = 'taco';

if (text){
 console.log(`Truthy`);
} else {
 console.log(`Falsy`);
}

//if no text in empty string its false (no characters)

// if (bool1) {
//  console.log(`it works`);
// }

// if (bool2) {
//  console.log(`also works`);
// }


//unary operator - typeof
let text = `some text`;
//console.log(typeof text); //operand
//binary operator - assignment
let number = 3;
let number2 = 2 + 5;
//ternary operator
//condition ? (runs if true) : (runs if false)

const value = 1 < 0;
value ? console.log(`value is true`) : console.log('false');

//Global Scope vs Local Scope
//any variable outside code block {} is said to be in Global Scope
//can access anywhere in the program
//Gotchas: name collisions, modify by mistake

let name = `bobo`;
name = `peter`;

function calculate(){
//some other code...
console.log(name);
name - `orange`
function inner(){
 name = 'inner name value';
 console.log(`this is from inner function ${name}`);
}
inner();
}
calculate();

if (true){
 //some other code...
 console.log(name);
 name = `pants`;
}
console.log(`my name is ${name}`);

//Local Scope
let name2 = `bobo`;

function calculateTwo() {
const name = `john`;
const age = 25;
//code goes here
becomesGlobal = `global variable`
}
calculateTwo();
// this wont work console.log(age);
console.log(becomesGlobal);

if (true) {
  //some other code...
 const name = `john`;
}
console.log(`my name is ${name2}`);

//Variable Lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2){
 const globalNumber = 20;
 const result = num1 + num2 + globalNumber;
function multiply(){
 const globalNumber = 100;
 const multiplyResult = result * globalNumber;
 console.log(multiplyResult);
 return multiplyResult;
}
 return result;
}

console.log(add(3,4));