//Template Literals - ES6+
// Backtick characters `` - above tab (left from one)
//Interpolation ${} = insert expression(value)

const name = "john";
const age = 25;
const sentence = "Hey it's " + name + " and he is " + age + " years old";

const value = `Hey it's ${name} and he is ${age} years old And here is some simple math 4 + 4 = ${
  4 + 4
}`;

console.log(value);
console.log(sentence);

//Array Properties and Methods
let names = ["john", "bobo", "barry", "olga", "ben"];

//length
console.log(names.length);
console.log(names[4]);
console.log(names.length - 1);

//concat
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames);
//reverse
console.log(allNames.reverse());
//unshift
allNames.unshift("suzy");
console.log(allNames);
//shift
allNames.shift();
console.log(allNames);
//push
allNames.push("suzy");
console.log(allNames);
//pop
allNames.pop();
console.log(allNames);
//splice - mutates original array
const specificNames = allNames.splice(2, 3);
console.log(specificNames);
console.log(allNames);

const names1 = ['taco', 'sean', 'red', 'pete', 
'bailey']
const lastnames = ['baco']
let newArray = [];

for(let i = 0; i < names1.length; i++){
console.log(i);
newArray.push(`${names1[i]} ${lastnames}`)
console.log(newArray);
}

//Functions, return, if ,arrays, for loop

const gas = [20,40,100,30]
const food= [10, 40, 50]

function calculateTotal(arr)
{
  let total = 0;
  for(let j = 0; j < arr.length; j++){
    total += arr[j];
  }
  if(total > 100){
    console.log(`you spend to much`);
    return total;
  }
   console.log(`you are cheap fuck`);

  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200,300,1,251]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});

//when assigning primitive data type value to a variable any changes are made directly to that value without affecting original value

//when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references

const firstnumber = 1;
const secondnumber = number;
secondnumber = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${secondnumber}`);

let dude = {name: 'bob'};
let dude2 = dude;
// passes value of person not reference let dude2 = {...dude};
dude2.name = `taco`;
console.log(`name of first dude is ${dude.name}`);
console.log(`name of second dude is ${dude2.name}`);

//Null and Undefined
//both represent "no value"

//undefined - "javascript can not find value fopr this"

//variable without value
//missing function arguments
//missing object properties

//null - 'developer sets the value"

let numberseven = 20 + null //20 + 0
console.log(numberseven);
let numbereight = 20 + undefined //20 + 0 cannot find value
console.log(numbereight);