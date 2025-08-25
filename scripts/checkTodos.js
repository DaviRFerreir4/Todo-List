export function checkTodos() {
  const todos = document.querySelectorAll(".todo-wrapper")
  let completed = 0
  todos.forEach((element, index) => {
    const teste = document.querySelectorAll("input[type=checkbox]")[index]
    teste.addEventListener("change", checkTodos)
    if (teste.checked) {
      completed++
    }
  })
  document.querySelector("span#todosRemaining").textContent = `${
    todos.length - 1 - completed
  } itens left`
}
