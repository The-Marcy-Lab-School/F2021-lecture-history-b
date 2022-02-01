console.log('hello world')
// Selecting An element by it's tag
const h1 = document.querySelector('h1')
// console.log(h1)

// Selecting the first div in the body
const firstDivInBody = document.querySelector('div')
// console.log(firstDivInBody)

// selecting a nested div
const child1 = firstDivInBody.querySelector('div')
// console.log(child1)

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
// getting all the elements
// node list
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList#methods
const children = document.querySelectorAll('#child1, #child2, .blue')
// console.log(children)

// getting element by class name
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
const boxElements = document.getElementsByClassName('box')
// console.log(boxElements)
// const firstBox = boxElements[0];
// console.log(firstBox)

// Getting element by id
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// NOTE: only available on document
const child3 = document.getElementById('child3')
// console.log(child3)

// Getting the *inline* styles
// console.log(firstDivInBody.style.border)

// creating elements
const child4 = document.createElement('div')
child4.style.backgroundColor = 'yellow';
child4.style.height = '100px';
child4.style.width = '100px';
child4.style.border = '2px solid black';

// adding children
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
const parent = document.getElementById('parent')
// parent.appendChild(child4)

// getting childNodes
// const childNodes = parent.childNodes;
// console.log(childNodes)
// const firstChildNode = childNodes[0]
// console.log(firstChildNode)
// const nextSibling = firstChildNode.nextSibling;
// console.log(nextSibling)
// const previousSibling = firstChildNode.previousSibling;
// console.log(previousSibling)

// removing all children
// if (parent) {
// parent.remove()
// }

// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
// adding html
// const oldContent = parent.innerHTML;
// parent.innerHTML = `
//   <div>this is the new content</div>
// `.concat(oldContent)

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
// const redBox = document.getElementsByClassName('red')[0]
// console.log(redBox)
// redBox.innerText = 'This is some inner text'