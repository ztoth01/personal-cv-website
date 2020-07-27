export function toogleClass(elem, className) {
  elem.classList.contains(className) ? elem.classList.remove(className) : elem.classList.add(className)
}