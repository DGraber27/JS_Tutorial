//window object = browser api
//document
//console.dir
//will always look in the window for method first which is why we don't have to say window.alert
//alert('hello');
//console.log(window);
//console.log(document);
//console.dir(document);

//Select the element or group of elements that we want
//Decide the effect to apply to the selection

//getElementbytId('element')
 
const h1 = document.getElementById('title');
h1.style.color = 'red';
const btn = document.getElementById('btn');

btn.style.backgroundColor = 'blue';
btn.style.color = 'white';

//better to assign to variable
// document.getElementById('btn').style.backgroundColor = 'blue';
// document.getElementById('btn').style.color = 'white';


//getElementsByTagName('tagname');
//node-list = array-like object
//index, length property but not array methods
const headings = document.getElementsByTagName('h2');
console.log(headings);
headings[0].style.color = 'green';
headings[1].style.color = 'purple';
//console.log(headings.length);
const items = document.getElementsByTagName('li');

//foreach wont work
//items.foreach(function(item){
//})

//ES6 stuff covered later
items[1].style.color = 'orange';
const betterItems = [...items];

betterItems.forEach(function(item){
 console.log(item);
})

console.log(items);
console.log(betterItems);

//getElementsByClassname('classname');
//node-list = array-like object
//index, length property but not array methods

const listItems = document.getElementsByClassName('special');

console.log(listItems);

listItems[1].style.color = 'blue';

//querySelector('any css'); - select single
//querySelectorAll('any css') -selects all

const result = document.querySelector('#result');
result.style.backgroundColor = 'yellow';
//only returns one item
const item = document.querySelector('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const list = document.querySelectorAll('.special');
console.log(list);

list.forEach(function(item) {
 console.log(item);
 item.style.border = 'solid';
});