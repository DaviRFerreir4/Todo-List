// Métodos de alteração de modo (light ou dark)
const html = document.querySelector("html")
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

// Precisa estar separada por conta do onresize da janela
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
