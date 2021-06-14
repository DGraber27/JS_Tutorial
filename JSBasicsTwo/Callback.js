//Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens

//Functions are first class objects - stored in a variable (expression), passed as an argument to another function return from the function (closure)

//High Order Function - accepts another function as an argument or returns another function as a result

//Callback Function - Passed to another function as an argument and executed inside that function

// function greetMorning(name) {
//  const myName = `drew`;
//  console.log(`Good morning ${name}, my name is ${myName}`);
// }

// function greetAfternoon(name) {
//  const myName = `drew`;
//  console.log(`Good Afternoon ${name}, my name is ${myName}`);
// }
// greetMorning(`taco`);
// greetAfternoon(`taco`);

function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}
function evening(name) {
  return `Good evening ${name.toUpperCase()}`;
}
function greet(name, cb) {
  const myName = `drew`;
  console.log(`${cb(name)}, my name is ${myName}`);
}
greet(`taco`, morning);
greet(`taco`, afternoon);
greet(`taco`, evening);

//Powerful Array Methods
//forEach, map, filter, find, reduce
//Iterate over array - no for loop required
//Accept CALLBACK function as an argument, calls Callback against each item in an array. Reference Item in the Callback Parameter.

const numbers = [0, 1, 2, 3, 4];
//show all numbers
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//forEach
//does not return new array

const people = [
  { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
  { name: "taco", age: 25, position: "designer", id: 2, salary: 300 },
  { name: "baco", age: 10, position: "boss", id: 3, salary: 500 },
  //{ name: "baco", age: 10, position: "boss" },
];

function showPerson(person) {
  console.log(person);
  console.log(person.position);
}

people.forEach(showPerson);
console.log(` `);
people.forEach(function (item) {
  console.log(item.position);
});

//map
//does return a new array
//does not change size of original array
//uses values from original array when making new one

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "taco", age: 25, position: "designer" },
//   { name: "baco", age: 10, position: "boss" },
// ];

const ages = people.map(function(person){
 return person.age + 20;
});
const newPeople = people.map(function(person1){
 return {firstName: person1.name,
 oldAge: person1.age + 20,
};
});
console.log(ages);
console.log(newPeople);

const names = people.map(function (person2){
 return `<h1>${person2.name}</h1>`;
});

document.body.innerHTML = names.join(``);

console.log(names);

//filter
//does return new array
//can manipulate the size of new array
//returns based on condition
const youngPeople = people.filter(function(person){
  return person.age <= 25;
});
const developers = people.filter(function(person){
  return person.position == 'developer';
});

console.log(youngPeople);

//find 
//returns single instance - (in this case object)
//returns first match, if no match undefined
//great for getting unique value


const person = people.find(function(person){
  return person.id === 3;
});

console.log(person);

//reduce
//iterates, callback function
//reduces to a single value - number, array, object
//1 pparameter ('acc') - total of all calculations
//2 parameter ('curr') - current iteration/value
//very powerful method
const total = people.reduce(function(acc,curr){
 console.log(`total ${acc}`);
 console.log(`current money: ${curr.salary}`);
 acc += curr.salary;
  return acc
}, 0);

console.log(total);