document.querySelectorAll("strong.showAll").forEach((strong) => {
  strong.addEventListener("click", () => {
    const todos = document.querySelectorAll("div.todo-wrapper")
    todos.forEach((element, index) => {
      if (index !== 0) {
        element.style.display = "flex"
      }
    })
  })
})

document.querySelectorAll("strong.showActive").forEach((strong) => {
  strong.addEventListener("click", () => {
    const todos = document.querySelectorAll("div.todo-wrapper")
    todos.forEach((element, index) => {
      element.style.display = "flex"
      if (index !== 0) {
        if (document.querySelectorAll("input[type=checkbox]")[index].checked) {
          element.style.display = "none"
        }
      }
    })
  })
})

document.querySelectorAll("strong.showCompleted").forEach((strong) => {
  strong.addEventListener("click", () => {
    const todos = document.querySelectorAll("div.todo-wrapper")
    todos.forEach((element, index) => {
      element.style.display = "flex"
      if (index !== 0) {
        if (!document.querySelectorAll("input[type=checkbox]")[index].checked) {
          element.style.display = "none"
        }
      }
    })
  })
})

document.querySelector("span#clearCompleted").addEventListener("click", () => {
  const todos = document.querySelectorAll("div.todo-wrapper")
  let todosDel = []
  todos.forEach((element, index) => {
    if (index !== 0) {
      if (document.querySelectorAll("input[type=checkbox]")[index].checked) {
        todosDel.push(element)
      }
    }
  })
  todosDel.forEach((element) => {
    element.remove()
  })
})
