import { randomIntegerBetween } from './utils/randomInteger.js'
import { updateGame } from './updateGame.js'

export function createButtons () {
  const random = randomIntegerBetween(1, 100)
  const fragment = document.createDocumentFragment()

  for (let i = 1; i <= 100; i++) {
    const btn = document.createElement('button')
    btn.textContent = i
    btn.addEventListener('click', e => {
      updateGame(random, i)
    })

    fragment.appendChild(btn)
  }

  return fragment
}
