document.querySelector("#changeMode").addEventListener("click", () => {
  let html = document.getElementsByTagName("html")[0]
  if (html.className == "") {
    document.getElementsByTagName("html")[0].classList.add("dark-mode");
    document.querySelector(".bg-image").style.backgroundImage = "url(assets/images/bg-desktop-dark.jpg)";
    document.querySelector("#changeMode").src = "assets/icons/icon-sun.svg";
  } else {
    document.getElementsByTagName("html")[0].classList.remove("dark-mode");
    document.querySelector(".bg-image").style.backgroundImage = "url(assets/images/bg-desktop-light.jpg)";
    document.querySelector("#changeMode").src = "assets/icons/icon-moon.svg";
  }
})

let editTodo = document.querySelectorAll("svg.edit");
editTodo.forEach((element, index) => {
  let inputCheckbox = document.querySelectorAll("input[type=checkbox]")[index + 1];
  let inputText = document.querySelectorAll("input[type=text]")[index + 1];
  element.addEventListener("click" , () => {
    editElement(inputCheckbox, inputText);
  });
});

let deleteTodo = document.querySelectorAll("svg.delete");
deleteTodo.forEach((element, index) => {
  let todoWrapper = document.querySelectorAll("div.todo-wrapper")[index + 1];
  element.addEventListener("click", () => {
    deleteElement(todoWrapper);
  });
});

let addTodo = document.querySelector("svg.add");
addTodo.addEventListener("click", () => {
  let newTodo = document.createElement("div");
  newTodo.classList.add("todo-wrapper");
  let inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.addEventListener("change", checkTodos);
  let inputText = document.createElement("input");
  inputText.type = "text";
  inputText.value = document.querySelector("input[type=text]").value;
  inputText.disabled = true;
  let svgEdit = createSvgEdit();
  svgEdit.addEventListener("click", () => {
    editElement(inputCheckbox, inputText);
  });
  newTodo.append(inputCheckbox);
  newTodo.append(inputText);
  let div = document.createElement("div");
  let svgDelete = createSvgDelete();
  svgDelete.addEventListener("click", () => {
    deleteElement(newTodo);
  });
  div.append(svgEdit);
  div.append(svgDelete);
  newTodo.append(div);
  document.querySelector("div.todo-list").prepend(newTodo);
  document.querySelector("input[type=text]").value = "";
  checkTodos();
});

function editElement(inputCheckbox, inputText) {
  if (inputText.disabled) {
    inputText.disabled = false;
    inputText.focus();
    inputText.style.borderColor = "var(--todo-font-color)";
    inputCheckbox.disabled = true;
    inputCheckbox.style.backgroundColor = "var(--todo-border-color)";
  } else {
    inputText.disabled = true;
    inputText.style.borderColor = "transparent";
    inputCheckbox.disabled = false;
    inputCheckbox.style.backgroundColor = "transparent";
  }
}

function deleteElement(element) {
  element.remove();
  checkTodos();
}  

function createSvgEdit() {
  let svgEdit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgEdit.setAttribute("width", "24");
  svgEdit.setAttribute("height", "24");
  svgEdit.setAttribute("fill", "var(--todo-font-color)");
  svgEdit.setAttribute("viewBox", "0 0 256 256");
  svgEdit.classList.add("add");
  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M232.49,55.51l-32-32a12,12,0,0,0-17,0l-96,96A12,12,0,0,0,84,128v32a12,12,0,0,0,12,12h32a12,12,0,0,0,8.49-3.51l96-96A12,12,0,0,0,232.49,55.51ZM192,49l15,15L196,75,181,60Zm-69,99H108V133l56-56,15,15Zm105-7.43V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28h67.43a12,12,0,0,1,0,24H52V204H204V140.57a12,12,0,0,1,24,0Z");
  svgEdit.append(path);
  return svgEdit;
}

function createSvgDelete() {
  let svgDelete = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgDelete.setAttribute("xmlns", "http://www.w3.org/2000/svg")
  svgDelete.setAttribute("width", "24")
  svgDelete.setAttribute("height", "24")
  svgDelete.setAttribute("fill", "var(--todo-font-color)")
  svgDelete.setAttribute("viewBox", "0 0 256 256")
  svgDelete.setAttribute("class", "delete")
  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z");
  svgDelete.append(path);
  return svgDelete;
}

function checkTodos() {
  let todos = document.querySelectorAll(".todo-wrapper");
  let completed = 0;
  todos.forEach((element, index) => {
    let teste = document.querySelectorAll("input[type=checkbox]")[index];
    //teste.addEventListener("change", checkTodos)
    if (teste.checked) {
      completed++;
    }
  });
  document.querySelector("span#todosRemaining").textContent = `${todos.length - 1 - completed}/${todos.length - 1} itens left`
}

let todos = document.querySelectorAll(".todo-wrapper");
todos.forEach((element, index) => {
  let teste = document.querySelectorAll("input[type=checkbox]")[index];
  teste.addEventListener("change", checkTodos);
});

document.querySelector("strong#showAll").addEventListener("click", () => {
  let todos = document.querySelectorAll("div.todo-wrapper");
  todos.forEach((element, index) => {
    if(index !== 0) {
      element.style.display = "flex";
    }
  });
});

document.querySelector("strong#showActive").addEventListener("click", () => {
  let todos = document.querySelectorAll("div.todo-wrapper");
  todos.forEach((element, index) => {
    element.style.display = "flex";
    if (index !== 0) {
      if(document.querySelectorAll("input[type=checkbox]")[index].checked) {
        element.style.display = "none";
      }
    }
  });
});

document.querySelector("strong#showCompleted").addEventListener("click", () => {
  let todos = document.querySelectorAll("div.todo-wrapper");
  todos.forEach((element, index) => {
    element.style.display = "flex";
    if (index !== 0) {
      if(!document.querySelectorAll("input[type=checkbox]")[index].checked) {
        element.style.display = "none";
      }
    }
  });
});

document.querySelector("strong#showCompleted").addEventListener("click", () => {
  let todos = document.querySelectorAll("div.todo-wrapper");
  todos.forEach((element, index) => {
    element.style.display = "flex";
    if (index !== 0) {
      if(!document.querySelectorAll("input[type=checkbox]")[index].checked) {
        element.style.display = "none";
      }
    }
  });
});

document.querySelector("span#clearCompleted").addEventListener("click", () => {
  let todos = document.querySelectorAll("div.todo-wrapper");
  let todosDel = [];
  todos.forEach((element, index) => {
    if (index !== 0) {
      if(document.querySelectorAll("input[type=checkbox]")[index].checked) {
        todosDel.push(element);
      }
    }
  });
  todosDel.forEach(element => {
    element.remove();
  });
checkTodos();
});

checkTodos();