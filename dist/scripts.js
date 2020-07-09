window.onload = () => {
  addObservers()
}

const addObservers = () => {
  const selects = document.querySelectorAll('select')
  selects.forEach(select => select.addEventListener('change', onSelectChange))
  document.querySelector('.add').addEventListener('click', addSquare)
  document.querySelector('.remove').addEventListener('click', removeSquare)
}

const onSelectChange = e => {
  const demo = document.querySelector('.demo')
  const classList = demo.classList
  for (const className of classList) {
    if (new RegExp(e.target.id).test(className)) {
      demo.classList.remove(className)
    }
  }
  demo.classList.add(`${e.target.id}-${e.target.value}`)
}

const addSquare = () => {
  const demo = document.querySelector('.demo')
  if (demo.childElementCount < 20) {
    const square = document.createElement('div')
    square.className = 'square'
    square.textContent = demo.childElementCount + 1
    demo.appendChild(square)
  }
}

const removeSquare = () => {
  const demo = document.querySelector('.demo')
  if (demo.lastElementChild) {
    demo.removeChild(demo.lastElementChild)
  }
}