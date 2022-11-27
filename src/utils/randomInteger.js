/**
 * Return a random integer between min and max, both included.
 * @param {number} min
 * @param {number} max
 * @returns {number} randomInteger
 */
export function randomIntegerBetween (min, max) {
  return Math.floor(Math.random() * max + min)
}
