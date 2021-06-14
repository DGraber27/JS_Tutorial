//prepend
//innerText

const headingOne = document.createElement('h2');
headingOne.innerText = 'taco baco';
document.body.prepend(headingOne);

//remove
//removeChild

const result = document.querySelector('#result');
//result.remove();
const heading = result.querySelector('h1');
result.removeChild(heading);
console.log(heading);

//innerHTML - gets whole HTML
//textContent - just gets text content

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);
const randomVar = 'random value';
const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">${randomVar}</li>
 <li>list item 2</li> <li>list item 3</li>`;
 console.log(ul.innerHTML);
 document.body.appendChild(ul);

//CSS

const random = document.querySelector(`.random`);
// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '3rem';
// random.style.textTransform = 'capitalize';
random.classList.add('title');
console.log(random.style);