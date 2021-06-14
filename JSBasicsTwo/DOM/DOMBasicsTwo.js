//getAttribute();
//setAttribute();

const first = document.querySelector('.first');
const classValue = first.getAttribute('class');
console.log(classValue);
const idValue = first.getAttribute('id');
console.log(idValue);

const link = document.getElementById('link');
const displayLink = link.getAttribute('href');
console.log(displayLink);

const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'taco baco';
console.log(last);

const showLink = link.getAttribute('href');
const links = document.querySelectorAll('.first');
console.log(links);

//className
//classList

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

const classOne = one.className;
console.log(classOne);

two.className = 'text';
// can have 'colors text' in class name but only works if you know everything need from beginning classlist is better
//three.classList.add('colors');
//three.classList.add('text);
three.classList.add('colors', 'text');
three.classList.remove('text');

let result = three.classList.contains('colors');
let resultOne = three.classList.contains('taco');
if(result) {
 console.log('yes');
} else {
 console.log('no');
}

if(resultOne) {
 console.log('yes');
} else {
 console.log('no');
}
//console.log(result);
const threeValue = three.classList;
console.log(threeValue);

//createElement('element');
//createTextNode('text content')
//element.appendChild(childElement)
//insertBefore('element', 'location')
const res = document.querySelector('#res');

//create empty element

const bodyDiv = document.createElement('div');
//create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const headingText = document.createTextNode('Dynamic Heading');
heading.appendChild(headingText);
heading.classList.add('blue');
res.appendChild(heading);
console.log(res.children);

const headingTwo = document.createElement('h3');
const twoText = document.createTextNode('insertBefore test');
headingTwo.appendChild(twoText);
headingTwo.classList.add('blue');
//document.body.insertBefore(headingTwo, res);
const headingThree = document.createElement('h3');
const threeText = document.createTextNode('heading 3');
headingThree.appendChild(threeText);
headingThree.classList.add('blue');
document.body.insertBefore(headingThree, res);

const beginning = document.querySelector('red');

res.insertBefore(headingTwo, beginning);

//replaceChild('new', 'old')

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode('I am smol');
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, headingThree);
console.log(res.children);