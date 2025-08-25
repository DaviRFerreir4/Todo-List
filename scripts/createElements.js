import { checkTodos } from "./checkTodos.js"
import { editElement, deleteElement } from "./manipulateTodo.js"
import { dragAndDropTodo } from "./dragAndDrop.js"

export default function createTodo(
  value = "",
  id = Math.ceil(Math.random() * 100)
) {
  if (value === "") {
    return alert("Insert the todo text before creating it")
  }
  const newTodo = document.createElement("div")
  newTodo.classList.add("todo-wrapper")
  newTodo.setAttribute("draggable", true)
  newTodo.id = `todo-${id}`
  newTodo.addEventListener("dragstart", () => newTodo.classList.add("dragging"))
  newTodo.addEventListener("dragend", () =>
    newTodo.classList.remove("dragging")
  )
  newTodo.addEventListener("dragover", (ev) => {
    ev.preventDefault()
    dragAndDropTodo(ev)
  })
  const inputCheckbox = document.createElement("input")
  inputCheckbox.type = "checkbox"
  inputCheckbox.addEventListener("change", checkTodos)
  const inputText = document.createElement("input")
  inputText.type = "text"
  inputText.value = value
  inputText.disabled = true
  const svgEdit = createSvgEdit()
  svgEdit.addEventListener("click", () => {
    editElement(inputCheckbox, inputText)
  })
  newTodo.append(inputCheckbox)
  newTodo.append(inputText)
  const div = document.createElement("div")
  const svgDelete = createSvgDelete()
  svgDelete.addEventListener("click", () => {
    deleteElement(newTodo)
  })
  div.append(svgEdit)
  div.append(svgDelete)
  newTodo.append(div)
  document.querySelector("div.todo-list").prepend(newTodo)
  document.querySelector("input[type=text]").value = ""
  checkTodos()
}

function createSvgEdit() {
  const svgEdit = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svgEdit.setAttribute("width", "18")
  svgEdit.setAttribute("height", "18")
  svgEdit.setAttribute("fill", "var(--font-color)")
  svgEdit.setAttribute("viewBox", "0 0 256 256")
  svgEdit.classList.add("add")
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
  path.setAttribute(
    "d",
    "M232.49,55.51l-32-32a12,12,0,0,0-17,0l-96,96A12,12,0,0,0,84,128v32a12,12,0,0,0,12,12h32a12,12,0,0,0,8.49-3.51l96-96A12,12,0,0,0,232.49,55.51ZM192,49l15,15L196,75,181,60Zm-69,99H108V133l56-56,15,15Zm105-7.43V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28h67.43a12,12,0,0,1,0,24H52V204H204V140.57a12,12,0,0,1,24,0Z"
  )
  svgEdit.append(path)
  return svgEdit
}

function createSvgDelete() {
  const svgDelete = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  )
  svgDelete.setAttribute("xmlns", "http://www.w3.org/2000/svg")
  svgDelete.setAttribute("width", "18")
  svgDelete.setAttribute("height", "18")
  svgDelete.setAttribute("fill", "var(--font-color)")
  svgDelete.setAttribute("viewBox", "0 0 256 256")
  svgDelete.setAttribute("class", "delete")
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
  path.setAttribute(
    "d",
    "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"
  )
  svgDelete.append(path)
  return svgDelete
}
