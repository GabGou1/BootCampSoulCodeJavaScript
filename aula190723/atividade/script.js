const botaoVerde = document.querySelector("#verde");
const botaoAmarelo = document.querySelector("#amarelo");
const botaoVermelho = document.querySelector("#vermelho");
const botaoIntervalo = document.querySelector("#intervalo");

const galeria = [
  "imagens/verde.png",
  "imagens/amarelo.png",
  "imagens/vermelho.png"
]
let indice = 1;
function galeriaIntervalo() {
  imagem.src = galeria[indice];
  if (indice === galeria.length - 1) {
    indice = 0;
  }
  else {
    indice++
  }
}

let intervaloId;
const imagem = document.querySelector("#imagem");

function mudarSemafaro(evento) {
  const botaoClicado = evento.target.id;
  if (botaoClicado === "verde") {
    clearInterval(intervaloId);
    imagem.src = "imagens/verde.png";
  }
  else if (botaoClicado === "amarelo") {
    clearInterval(intervaloId);
    imagem.src = "imagens/amarelo.png";
  }
  else if (botaoClicado === "vermelho") {
    clearInterval(intervaloId);
    imagem.src = "imagens/vermelho.png";
  }
  else {
    intervaloId = setInterval(galeriaIntervalo, 2000);
  }
}

botaoVerde.addEventListener("click", mudarSemafaro);
botaoAmarelo.addEventListener("click", mudarSemafaro);
botaoVermelho.addEventListener("click", mudarSemafaro);
botaoIntervalo.addEventListener("click", mudarSemafaro);

// Outra forma de fazer
// botaoVerde.addEventListener("click", () => {
//  imagem.src = galeria[0];
// })