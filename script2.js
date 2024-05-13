const rato = document.getElementById("rato")
const queijo = document.getElementById("queijo")
const botao = document.getElementById("button")
const barraProgresso = document.getElementById("progress-container")
let tamanhoInicial = 0
let tamanhoFinal = 200
barraProgresso.classList.add("hidden");
botao.classList.add("hidden"); //faz o botao começar escondido


const maxX = 420; // limite de largura
const maxY = 280; // limite de altura
const proximity = 20; // distancia do rato para o queijo em que o botao aparece

// checar a proximidade de rato e queijo
function isRatoNearQueijo() {
  const ratoLeft = parseInt(window.getComputedStyle(rato).getPropertyValue("left"));
  const ratoTop = parseInt(window.getComputedStyle(rato).getPropertyValue("top"));
  const queijoLeft = parseInt(window.getComputedStyle(queijo).getPropertyValue("left"));
  const queijoTop = parseInt(window.getComputedStyle(queijo).getPropertyValue("top"));
  const distance = Math.sqrt(Math.pow(ratoLeft - queijoLeft, 2) + Math.pow(ratoTop - queijoTop, 2));
  return distance <= proximity;
}

//movimentação atraves das setas
window.addEventListener("keydown", (e) => {
  let left = parseInt(window.getComputedStyle(rato).getPropertyValue("left"))
  let top = parseInt(window.getComputedStyle(rato).getPropertyValue("top"))

  let newLeft, newTop;

  switch (e.key) {
    case "ArrowLeft":
      newLeft = Math.max(0, left - 10);
      rato.style.left = newLeft + "px";
      break;
    case "ArrowRight":
      newLeft = Math.min(maxX, left + 10);
      rato.style.left = newLeft + "px";
      break;
    case "ArrowUp":
      newTop = Math.max(0, top - 10);
      rato.style.top = newTop + "px";
      break;
    case "ArrowDown":
      newTop = Math.min(maxY, top + 10);
      rato.style.top = newTop+ "px";
      break;
  }

  // checar e mostrar o botao caso verdadeiro
  if (isRatoNearQueijo()) {
    botao.classList.remove("hidden");
  } else {
    botao.classList.add("hidden"); // esconder o botao caso o rato se afaste
  }
});

//aumentar a barra de progresso toda vez que o botao for clicado
botao.addEventListener("click", () => {
  if (tamanhoInicial < tamanhoFinal) {
    tamanhoInicial += 30;
    barraProgresso.style.width = tamanhoInicial + "px";
    barraProgresso.classList.remove("hidden");
  }

});

