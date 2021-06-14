//click - fires after full action occurs
//mousedown - button is pressed
//mouseup - button is released
//mouseenter - moved onto an element
//mouseleave - mouved out of an element

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function(){
//  console.log('clicked');
// })
// btn.addEventListener('mousedown', function(){
//  console.log('down');
// })
// btn.addEventListener('mouseup', function(){
//  console.log('up');
// })
// heading.addEventListener('mouseenter', function(){
//  heading.classList.add('blue');
//  console.log('enter');
// })
// heading.addEventListener('mouseleave', function(){
//  heading.classList.remove("blue");
//  console.log('leave');
// })

//keypress - when key is pressed
//keydown - when key is down
//keyup- when key is up

// const nameInput = document.getElementById('name');

// nameInput.addEventListener('keypress', function(){
//  console.log('you press a key');
// });
// nameInput.addEventListener('keyup', function(){
//  console.log('you press a key up');
// });
// nameInput.addEventListener('keydown', function(){
//  console.log(nameInput.value);
// });

//event object arghument event
//info about triggered event
//event.type
//event.currentTarget
//this keyword
//preventDefault() - prevents default behavior

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');
heading.addEventListener('click', function(event) {
console.log(event.currentTarget);
});

btn.addEventListener('click', function(event){
 event.currentTarget.classList.add('blue');
 console.log(event.type);
});
function someFunc(e){
e.preventDefault();
}
link.addEventListener('click', someFunc)

//currentTarget- always referes to the element to which the event handler has been attacked to
//target - identifies the element on which the event occurred will only change what is clicked and not everything encased in the element if more nested only the text you click will turn green and not the whole button
//code below wont work but explains how they'll work differently with buttons and buttons with nested elements

//btns.forEach(function()btn {
//btn.addEventListener('click',function(e){
//console.log('target',e.target);
//console.log('target',e.currentTarget);
//e.target.style.color = 'green';
//});
//});


