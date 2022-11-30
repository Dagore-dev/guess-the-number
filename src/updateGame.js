import { createModal } from './utils/createModal.js'

/**
 * Check if the user hit the correct number and disable the invalid buttons
 * @param {number} random
 * @param {number} selectedNumber
 */
export function updateGame (random, selectedNumber) {
  const buttonsContainer = document.getElementById('buttons-container')
  const buttons = document.querySelectorAll('.grid button')

  if (random === selectedNumber) {
    const dialog = createModal(`¡Correcto! El número secreto era ${random}`)
    buttonsContainer.appendChild(dialog)
    dialog.open = true

    buttons.forEach(btn => {
      btn.disabled = true
    })
  } else {
    let arrayOfButtons = Array.from(buttons)

    if (random > selectedNumber) {
      arrayOfButtons = arrayOfButtons
        .filter(btn => btn.textContent <= selectedNumber)
    } else {
      arrayOfButtons = arrayOfButtons
        .filter(btn => btn.textContent >= selectedNumber)
    }

    arrayOfButtons.forEach(btn => { btn.disabled = true })
  }
}
