import "./changeMode.js"
import createTodo from "./createElements.js"
import "./features.js"

// Criando os todos iniciais
const initialTodos = [
  {
    id: 1,
    todo: "Go to the gym",
  },
  {
    id: 2,
    todo: "Study JavaScript",
  },
  {
    id: 3,
    todo: "Do the laundry",
  },
  {
    id: 4,
    todo: "Buy groceries",
  },
  {
    id: 5,
    todo: "Open a bank account",
  },
]

initialTodos.forEach((todo) => {
  createTodo(todo.todo, todo.id)
})

// Método para criação de todos
const addTodo = document.querySelector("svg.add")
const newTodoInput = document.querySelector("input[type=text]")
addTodo.addEventListener("click", () => {
  createTodo(newTodoInput.value.trim())
})
