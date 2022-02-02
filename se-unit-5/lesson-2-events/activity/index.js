// listening for when our initial document is loaded
// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener('DOMContentLoaded', () => {
  console.log(`
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                   EVENTS
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
`)
})

// window.addEventListener('load', () => {
//   console.log(`everything has loaded`)
// })

// link, img, script

// adding focus/blur events
// window.addEventListener('blur', () => {
//   console.log(`user has left the building`)
// })
// window.addEventListener('focus', () => {
//   console.log(`user has reentered the building`)
// })

// querying for elements
// const button = document.querySelector('#btn')
// const div = document.querySelector('div')
// const nameInput = document.querySelector('#name')
// console.log(button)

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// adding event listener (click)
// div.addEventListener('mouseover', () => {
//   console.log('someone hovered me')
// })

// window.addEventListener('keydown', (event) => {
//   console.log(event)
// })

// nameInput.addEventListener('change', (event) => {
//   // inspecting an event object
//   console.log(event)
// })

// const text = document.createElement('p')
// document.body.appendChild(text)
// adding key events (key)
// Create a div with an id of box (in html)
// query the dom for the box
// const box = document.querySelector('#box')
// box.style.height = '100px'
// box.style.width = '100px'
// box.style.border = `2px solid black`
// // add an event listener that will change the style of the box (backgroundColor)
// let count = 0;
// box.addEventListener('click', () => {
//   count++;
//   box.style.backgroundColor = 'coral';
//   // upon clicking
//   // and will append text to the dom that shows how many times it been clicked
//   text.innerText = count;
// })

// event propogation (what happens when we click nested elements)
const bigBox = document.getElementById('bigbox')
const littleBox = document.getElementById('littlebox')
const littleBox2 = document.getElementById('littlebox2')

// function handleClick(event) {
//   event.stopPropagation();
//   // console.log(event)
//   console.log(`the click was on ${event.target.id}`)
// }

littleBox.addEventListener('click', handleClick)
littleBox2.addEventListener('click', handleClick)
bigBox.addEventListener('click', () => {
  console.log(`big box handled a click`)
})

// default actions (link, form)
const googleLink = document.querySelector('#googleLink')

function handleClick(event) {
  event.preventDefault();
  // console.log(event)
  console.log(`the click was on ${event.target.id}`)
}

if (googleLink) {
  googleLink.addEventListener('click', handleClick)
}