function toggleMode() {
  const html = document.documentElement
  // Toggle
  html.classList.toggle("light")

  // trocar imagem de acordo com modo: if/else
  //pegar imagem
  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "avatar-light.png")
  } else {
    img.setAttribute("src", "avatar.png")
  }
}

//substituir legenda (alt)
const img = document.querySelector("#profile img")
if (html.classlist.contains(light)) {
  img.setAttribute(
    "alt",
    "Mayk Brito sorrindo, usando oculos escuro e casaco, sem barba e fundo azul."
  )
} else {
  img.setAttribute(
    "alt",
    "Foto de Mayk Brito sorrindo, usando oculos e camisa preta, cavanhaque e fundo amarelo."
  )
}
