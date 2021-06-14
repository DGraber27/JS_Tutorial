//allows select dynamic elements
//event propogation - order the events are fired
//event bubbling - clicked element first then bubblesup -- default
//event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container');
// const list = document.querySelector('.list-items');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');

// function showBubbling(e) {
//  console.log('current target', e.currentTarget);
//  // console.log('target', e.target);
//  // if(e.target.classList.contains('link')){
//  //  console.log('it is link');
//  // }
// }

// function stopPropagation(e){
//  console.log('you click on list');
//  e.stopPropagation();
// }
// //list.addEventListener('click', stopPropagation);
// list.addEventListener('click', showBubbling, {capture: true});
// container.addEventListener("click", showBubbling, {capture: true});
// document.addEventListener("click", showBubbling, {capture: true});
// window.addEventListener("click", showBubbling, {capture: true});

// function sayHello(){
//  console.log('hello');
// }

btn.addEventListener('click', function(){
 const element = document.createElement('h1');
 element.classList.add('heading');
 element.textContent = `i'm inside container`
 container.appendChild(element);
});

container.addEventListener('click', function(e){
 if(event.target.classList.contains('heading')) {
  console.log('hello');
 }
})
// heading.addEventListener('click', sayHello);