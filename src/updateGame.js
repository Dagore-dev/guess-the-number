/**
 * Check if the user hit the correct number and disable the invalid buttons
 * @param {number} random
 * @param {number} selectedNumber
 */
export function updateGame (random, selectedNumber) {
  const buttons = document.querySelectorAll('.grid button')

  if (random === selectedNumber) {
    window.alert(`¡Correcto! El número secreto era ${random}`)
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
