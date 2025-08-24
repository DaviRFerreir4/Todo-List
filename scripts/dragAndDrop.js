const todos = document.querySelectorAll(".todo-wrapper")
const html = document.querySelector("html")
todos.forEach((element, key) => {
  if (key !== 0) {
    element.addEventListener("dragstart", (ev) => {
      // Add the target element's id to the data transfer object
      ev.dataTransfer.setData("text", ev.target.id)
      ev.dataTransfer.effectAllowed = "move"
    })
    element.addEventListener("dragenter", (ev) => {
      ev.preventDefault()
      // const targetElement = ev.target.closest(".todo-wrapper")
      // if (targetElement.classList.contains("todo-wrapper")) {
      //   console.log("Entrou")
      // }
    })
    element.addEventListener("dragleave", (ev) => {
      ev.preventDefault()
      // const targetElement = ev.target.closest(".todo-wrapper")
      // if (targetElement.classList.contains("todo-wrapper") || ) {
      //   console.log("Saiu")
      // }
    })
    element.addEventListener("dragover", (ev) => {
      ev.preventDefault()
      ev.dataTransfer.dropEffect = "move"
    })
    element.addEventListener("drop", (ev) => {
      ev.preventDefault()
      const data = ev.dataTransfer.getData("text")
      const targetElement = ev.target.closest(".todo-wrapper")
      const arrowElement = document.getElementById(data)
      console.log()
      if (targetElement.compareDocumentPosition(arrowElement) == 2) {
        targetElement.after(arrowElement)
      } else if (targetElement.compareDocumentPosition(arrowElement) == 4) {
        targetElement.before(arrowElement)
      }
    })
  }
})
