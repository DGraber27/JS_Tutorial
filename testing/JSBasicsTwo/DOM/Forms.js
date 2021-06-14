//submit event listener
//prevent default
//how to get a value

// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const password = document.getElementById('password');

// form.addEventListener('submit', function(e){
//  e.preventDefault();
// console.log('form submitted');
// console.log(name.value);
// console.log(password.value);
// });

//Web Storage API - provided by browser
//session storage, local storage
//setItem, getItem, removeItem clear

// localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');
// localStorage.setItem('name', 'taco');
// localStorage.setItem('job', 'taco');
// localStorage.setItem('friend', 'taco');
// localStorage.setItem('address', 'taco');

// const name1 = localStorage.getItem('name');
// console.log(name1);
// localStorage.removeItem('friend');
// const name2 = localStorage.getItem('name');
// console.log(name2);
// localStorage.clear();

//JSON.stringify() , JSON.parse()

const friends = ["taco", "baco", "paco"];

//localStorage.setItem('friends', friends);
localStorage.setItem("friends", JSON.stringify(friends));

//const values = localStorage.getItem('friends');
// console.log(values[0]); will return 't' because its not an array anymore
const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[2]);

let fruits;

if (localStorage.getItem(`fruits`)) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}

console.log(fruits);
fruits.push('apple');
localStorage.setItem(`fruits`, JSON.stringify(fruits));
