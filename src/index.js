import { createButtons } from './createButtons.js'
import { removeChildNodes } from './utils/removeChildNodes.js'

window.addEventListener('DOMContentLoaded', main)

function main () {
  const buttonsContainer = document.getElementById('buttons-container')
  const newGameBtn = document.getElementById('new')

  const buttons = createButtons()
  buttonsContainer.appendChild(buttons)

  newGameBtn.addEventListener('click', handleNewGame)
}

function handleNewGame () {
  const buttonsContainer = document.getElementById('buttons-container')

  removeChildNodes(buttonsContainer)
  main()
}
