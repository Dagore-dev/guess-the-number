/**
 * Removes all child nodes of element
 * @param {HTMLElement} element
 */
export function removeChildNodes (element) {
  while (element.firstElementChild) {
    element.removeChild(element.firstElementChild)
  }
}
