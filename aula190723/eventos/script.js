// Evento -> Ação (Clique, Teclar, Movimentar o cursor)
// click -> Clique do mouse
// dblclick -> Duplo clique na tela
// keydown -> Apertar o botão
// keyup -> soltar o botão
// mouseover -> Moveu o ponteiro do mouse sobre o elemento
// mouseout -> Moveu o ponteiro do mouse para fora do elemento
// submit -> submeter os dados de um formulário
// change -> Alterar o valor de um campo de formulário
// focus -> Evento acionado quanto o foco está sobre o elemento

const quadrado = document.querySelector("#quadrado");
quadrado.onclick = () => { // Primeira forma de se adicionar um "ouvidor de eventos"
    quadrado.style.backgroundColor = "#003049";
    quadrado.style.borderRadius = "64px";
    quadrado.style.transform = "translateY(200px)";
}
quadrado.ondblclick = () => {
    quadrado.style.backgroundColor = "blue";
    quadrado.style.borderRadius = "0";
    quadrado.style.transform = "translateY(0px)";
}

function changeColorStyle(){ // Esta função está sendo chamada no HTML
    quadrado.style.backgroundColor = "#0d63cb";
}

quadrado.addEventListener("mouseout", () => quadrado.style.backgroundColor = "green"); // Terceira forma de se adicionar um "ouvidor de eventos"

console.log({quadrado});