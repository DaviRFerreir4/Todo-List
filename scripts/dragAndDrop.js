const todos = document.querySelectorAll(".todo-wrapper")
const html = document.querySelector("html")
todos.forEach((element, key) => {
  if (key !== 0) {
    element.addEventListener("dragstart", (ev) => {
      element.classList.add("dragging")
    })
    element.addEventListener("dragend", (ev) => {
      element.classList.remove("dragging")
    })
    element.addEventListener("dragover", (ev) => {
      ev.preventDefault()
      const targetElement = ev.target.closest(".todo-wrapper")
      const arrowElement = document.querySelector(".dragging")
      if (targetElement.compareDocumentPosition(arrowElement) == 2) {
        targetElement.after(arrowElement)
      } else if (targetElement.compareDocumentPosition(arrowElement) == 4) {
        targetElement.before(arrowElement)
      }
    })
  }
})
