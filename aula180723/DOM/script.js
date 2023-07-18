// window.document Objeto que representa o documento HTML
// document.getElementById("titulo"); busca pelo id do elemento
// document.getElementsByClassName(); busca todos os elementos por class
// document.getElementsByTagName(); busca todos os elementos da tag
// document.querySelector(); busca um elemento com base no seu seletor CSS

// window.document.getElementById();
let h1 = document.getElementById("titulo"); // é muito utilizado
console.log(h1);

let paragrafos = document.getElementsByClassName("paragrafo");
paragrafos[0].hidden = false;
console.log(paragrafos);

let negrito = document.getElementsByTagName("b");
console.log(negrito);

let formulario = document.querySelector("input[type=email]");
console.log(formulario);

// h1.align = "right";
// h1.title = "Título Principal";
// h1.style.color = "cyan";
// h1.style.fontSize = "50px";

let paragrafo = document.querySelector(".paragrafo");
paragrafo.innerHTML = "Hoje na aula de JS conversamos sobre DOM. Entendi todas as matérias."
console.log(paragrafo.innerText); // conteúdo textual do elemento
console.log(paragrafo.innerHTML);

let caixa = document.querySelector("#informe");
caixa.classList.add("erro");
caixa.classList.remove("mensagem");
caixa.classList.toggle("atencao"); // adiciona se não existir, e remove se já existe
console.log(caixa);