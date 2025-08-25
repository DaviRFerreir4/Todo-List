import { checkTodos } from "./checkTodos.js"

export function editElement(inputCheckbox, inputText) {
  if (inputText.disabled) {
    inputText.disabled = false
    inputText.focus()
    inputText.style.borderColor = "var(--todo-font-color)"
    inputCheckbox.disabled = true
    inputCheckbox.style.backgroundColor = "var(--todo-border-color)"
  } else {
    if (inputText.value.trim() === "") {
      return alert("You can't leave the todo empty")
    }
    inputText.disabled = true
    inputText.style.borderColor = "transparent"
    inputCheckbox.disabled = false
    inputCheckbox.style.backgroundColor = "transparent"
  }
}

export function deleteElement(element) {
  if (window.confirm("Do you realy want to delete this todo?")) {
    element.remove()
    checkTodos()
  }
}
