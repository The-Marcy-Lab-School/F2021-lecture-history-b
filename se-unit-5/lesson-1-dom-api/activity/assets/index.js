console.log('hello world')

const parent = document.getElementById('parent')

function createBox(bgcolor) {
  const box = document.createElement('div')
  const HEIGHT = '100px'
  const WIDTH = '100px'

  box.style.backgroundColor = bgcolor;
  box.style.height = HEIGHT;
  box.style.width = WIDTH;
  box.style.border = '2px solid black'

  return box;
}


const yellowText = document.createElement('p')
// yellowText.innerText = 'is this the real world'
yellowText.innerHTML = `
  <i>Is This The Real World</i><b>Nope</b>
`
const yellowBox = createBox('yellow');
const brownBox = createBox('brown');
yellowBox.appendChild(yellowText)
  
// parent.appendChild(yellowBox)
// parent.appendChild(brownBox)

parent.childNodes.forEach(node => node.remove());
