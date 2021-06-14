//Math
//Standard built-in objects = always available

//const number= 4.56789;
//const result = Math.floor(number);

// const number= 4.56789;
// const result = Math.ceil(number);

// const number= 81;
// const result = Math.sqrt(number);
//const result = Math.PI;
//const result = Math.min(4,5,6,7,9);
//const result = Math.max(4,5,6,7,9);
// const result = Math.random();
//const result = Math.random()* 10;
const result =Math.ceil( Math.random()* 10); // or floor with + 1 at the end
console.log(result);

//Date

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', "October", 'November', "December",]
const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]

//const date = new Date();
const date = new Date('1/12/2005')
const month = date.getMonth();
console.log(months[month]);
console.log(month); //jan = 0
console.log(date);

const day = date.getDay();
console.log(day);
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`

console.log(sentence);