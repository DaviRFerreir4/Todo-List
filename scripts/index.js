// Métodos de alteração de modo (light ou dark)

const html = document.getElementsByTagName("html")[0]
const bgImg = document.querySelector(".bg-image")
const changeModeImg = document.querySelector("#changeMode")

changeModeImg.addEventListener("click", () => {
  if (html.className == "") {
    html.classList.add("dark-mode")
    changeModeImg.src = "assets/icons/icon-sun.svg"
  } else {
    html.classList.remove("dark-mode")
    changeModeImg.src = "assets/icons/icon-moon.svg"
  }
  addBackgroundImage()
})

function addBackgroundImage() {
  if (html.className == "") {
    bgImg.style.backgroundImage =
      window.innerWidth >= 750
        ? "url(assets/images/bg-desktop-light.jpg)"
        : "url(assets/images/bg-mobile-light.jpg)"
  } else {
    bgImg.style.backgroundImage =
      window.innerWidth >= 750
        ? "url(assets/images/bg-desktop-dark.jpg)"
        : "url(assets/images/bg-mobile-dark.jpg)"
  }
}

window.onresize = addBackgroundImage

// Métodos de manipulação de todos

const editTodo = document.querySelectorAll("svg.edit")

editTodo.forEach((element, index) => {
  // Uso +1 no index para desconsiderar os elementos para criação de todo
  const inputCheckbox = document.querySelectorAll("input[type=checkbox]")[
    index + 1
  ]
  const inputText = document.querySelectorAll("input[type=text]")[index + 1]
  element.addEventListener("click", () => {
    editElement(inputCheckbox, inputText)
  })
})

const deleteTodo = document.querySelectorAll("svg.delete")
deleteTodo.forEach((element, index) => {
  // Uso +1 no index para desconsiderar os elementos para criação de todo
  const todoWrapper = document.querySelectorAll("div.todo-wrapper")[index + 1]
  element.addEventListener("click", () => {
    deleteElement(todoWrapper)
  })
})

function editElement(inputCheckbox, inputText) {
  if (inputText.disabled) {
    inputText.disabled = false
    inputText.focus()
    inputText.style.borderColor = "var(--todo-font-color)"
    inputCheckbox.disabled = true
    inputCheckbox.style.backgroundColor = "var(--todo-border-color)"
  } else {
    inputText.disabled = true
    inputText.style.borderColor = "transparent"
    inputCheckbox.disabled = false
    inputCheckbox.style.backgroundColor = "transparent"
  }
}

function deleteElement(element) {
  element.remove()
  checkTodos()
}

// Método para criação de todos

const addTodo = document.querySelector("svg.add")
addTodo.addEventListener("click", () => {
  const newTodo = document.createElement("div")
  newTodo.classList.add("todo-wrapper")
  const inputCheckbox = document.createElement("input")
  inputCheckbox.type = "checkbox"
  inputCheckbox.addEventListener("change", checkTodos)
  const inputText = document.createElement("input")
  inputText.type = "text"
  inputText.value = document.querySelector("input[type=text]").value
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
})

function createSvgEdit() {
  const svgEdit = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svgEdit.setAttribute("width", "24")
  svgEdit.setAttribute("height", "24")
  svgEdit.setAttribute("fill", "var(--todo-font-color)")
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
  svgDelete.setAttribute("width", "24")
  svgDelete.setAttribute("height", "24")
  svgDelete.setAttribute("fill", "var(--todo-font-color)")
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

// Método para checagem de todos

function checkTodos() {
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

const todos = document.querySelectorAll(".todo-wrapper")
todos.forEach((element, index) => {
  const teste = document.querySelectorAll("input[type=checkbox]")[index]
  teste.addEventListener("change", checkTodos)
})

// Funcionalidades da barra de features

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
