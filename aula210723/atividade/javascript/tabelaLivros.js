import {Livro ,vetorDeLivros} from "./livros.js";

const tabela = document.querySelector("#content_table");
function adicionarTabela(livros) {
  for (let livro of livros) {
    let linha = document.createElement("tr");
    for(let dado in livro){
      if(dado != "id"){
        let coluna = document.createElement("td");
        coluna.innerHTML = livro[dado];
        linha.appendChild(coluna);
      }
    }
    tabela.appendChild(linha);
  }
}

adicionarTabela(vetorDeLivros);

const titulo = document.querySelector("#title");
const autor = document.querySelector("#author");
const anoPubli = document.querySelector("#publicacao");
const generoL = document.querySelector("#genero");

const adicionar = document.querySelector("#add");
adicionar.addEventListener("click", () => {
  const novoLivro = new Livro(1 ,titulo.value, autor.value, anoPubli.value, generoL.value);
  const novoVetor = [novoLivro]
  adicionarTabela(novoVetor);
});