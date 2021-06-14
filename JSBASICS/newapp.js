//Arrays, Functions and Objects
//Arrays - [], 0 index based

const friend1 = 'anna';
const friend2 = 'anna';
const friend3 = 'anna';
const friend4 = 'anna';

const friends = ['taco', 'baco', 'bill', 45, undefined, null];
console.log(friends);
console.log(friends[0]);
//trying to find a value outside of the array will return undefined
console.log(friends[6]);
let bestFriend = friends[2];
console.log(bestFriend);

//Functions - declare, invoke
//params -when declare/define
//placeholders, local vars
//arguments - when invoke/call/run
//use vars/values, multiple params, undefined
function greet(firstName) {
 console.log('Hello there, ' + firstName);
}
greet('bob');
//bob
greet("taco");
//taco
greet("baco");
//baco

//return
//default, undefined, shortcuts, ignores after
//1 inch 2.54cm

const wallHeight = 80;
function calculate(value){
 const newValue = value * 2.54;
console.log('The value in cm is : ' + (newValue) + 'cm');
return newValue;
//anything under return will not run as return leaves the function
}
// function calculate(value) {
//   return value * 2.54;
// }
const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];

console.log(dimensions);

//Expressions - another way to define a function
//create a variable, assign to FUNCTION 9not value), use var
//diff - hoisting, use - arrow func, libraries,

//function definition/declaration
function addValues(num1, num2){
 return num1 + num2;
}

const firstValue = addValues(3,4);
const secondValue = addValues(12,34);
//function expression - can leave function name or remove it because no matter what are using new name 'add' to call function;
const add = function addValues(num1, num2) {
  return num1 + num2;
};
const thirdValue = add(5,6);
const values = [firstValue, secondValue, thirdValue, add(7,2)];
console.log(values);


//const multiply = (num1, num2) => num1 * num2;

//exports.nameOfMethod = function() {}

//Objects - key/value pairs methodes
//dot notation

const person = {
 first_Name: 'taco',
 last_Name: 'baco',
 age: 25,
 education: false,
 married: true,
 siblings: ['Kurger Bing', 'WubSay'],
 greeting: function () {
  console.log('Hello my name is Taco Baco');
 },
};

const age = person.age;
console.log(age);
person.name = 'bob';
console.log(person.first_Name);
console.log(person.siblings[0]);
person.greeting();

//Conditional Statements
// >, <, >=, <=, ==. ===, !=, !===
const value = 2 < 1;
const value1 = 2 > 1;
if (value1) {
  console.log("taco baco");
}
if(true) {
 console.log('taco baco');
}
if (value) {
  console.log("taco baco");
}
else {
 console.log("baco taco");
}

const num1 = 6;
const num2 = 6;
const res = num1 >= num2;
if (num1 > num2) {
 console.log('1/2');
}else if (res) {
 console.log('2 = 1');
} else {
 console.log('2/1');
} 
const value2 = false;
if (!value2) {
 console.log('value is true');
}
// == checks only value
//=== checks value and type
const num3 = 6;
const num4 = '6';
const value3 = num3 == num4;
const value4 = num3 === num4;
console.log(value3);
console.log(value4);