//Select the element or group of elements that we want
//Decide the effect to apply to the selection

//childNodes - reutrns all childNodes including whitespace which is treated as a text node

//children
//firstChild - returns all ChildNodes
//lastChild - retursna ll ChildNodes

const result = document.querySelector('#result');

const allChildren = result.childNodes;
//console.log(allChildren);

const children = result.children;
console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);

//ParentElenment
const heading = document.querySelector('h2')
// console.log(heading.parentElement.parentElement.parentElement.parentElement.parentElement);
// console.log(heading.parentElement.parentElement.parentElement.parentElement);
// console.log(heading.parentElement.parentElement.parentElement);
console.log(heading.parentElement.parentElement);
console.log(heading.parentElement);
const parent = heading.parentElement;
parent.style.color = 'red';

//previousSibling
//nextSibling
//return whitespace

const first = document.querySelector('.first');
console.log(first);
first.nextElementSibling.style.color = 'red';
// const second = first.nextSibling;
// const secondTwo = first.nextSibling.nextSibling.style.color = 'red';
// console.log(second);
// console.log(secondTwo);

const last = document.querySelector('#last');
// const third = last.previousSibling.previousSibling;
// console.log(third);
// console.log(last.nextSibling.nextSibling);

//nodeValue
//textContent

const item = document.getElementById('special');
const value = item.nodeValue;
console.log(item.childNodes[0]);
console.log(item.firstChild.nodeValue);

//text content
const easyValue = item.textContent;
console.log(easyValue);

