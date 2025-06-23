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
  let inputText = document.querySelectorAll("input[type=text]")[index + 1];
  let inputCheckbox = document.querySelectorAll("input[type=checkbox]")[index + 1];
  element.addEventListener("click" , () => {
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
  });
});

let deleteTodo = document.querySelectorAll("svg.delete");
deleteTodo.forEach((element, index) => {
  let todoWrapper = document.querySelectorAll("div.todo-wrapper")[index + 1];
  element.addEventListener("click", () => {
    todoWrapper.remove();
  });
});