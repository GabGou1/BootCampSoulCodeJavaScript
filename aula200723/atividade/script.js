const addAtividade = document.querySelector("#descricao");
const addPrioridade = document.querySelector("#prioridade");
const addPrazo = document.querySelector("#data");
const submitBtn = document.querySelector("#add");
const tabela = document.querySelector("#table");

class Linha {
    atividade;
    prioridade;
    prazo;

    constructor(atividade, prioridade, prazo) {
        this.atividade = atividade;
        this.prioridade = prioridade;
        this.prazo = prazo;
    }
}
submitBtn.addEventListener("click", () => {
    const novaAtiv = new Linha(addAtividade.value, addPrioridade.value, addPrazo.value);
    adicionarTabela(novaAtiv);
})

function adicionarTabela(elementos) {
    let novaLinha = document.createElement("tr");
    for (let elemento in elementos) {
        let novaColuna = document.createElement("td");
        novaColuna.innerHTML = elementos[elemento];
        novaLinha.appendChild(novaColuna);
    }

    // Adiciona o checkbox
    let colunaCheckbox = document.createElement("td");
    colunaCheckbox.innerHTML = '<input type="checkbox">';
    novaLinha.appendChild(colunaCheckbox);

    // Adiciona o apagar
    let colunaDeletar = document.createElement("td");
    colunaDeletar.innerHTML = '<button type="button"><span class="material-symbols-outlined">delete</span></button>';
    novaLinha.appendChild(colunaDeletar);
    tabela.appendChild(novaLinha)
}

tabela.addEventListener("click", (evento) => {
    if (evento.target.tagName === "BUTTON") {
        let linhaRemover = evento.target.parentElement.parentElement;
        linhaRemover.remove();
    }
});
tabela.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("material-symbols-outlined")) {
        let botaoApagar = evento.target.parentElement;
        let linhaRemover = botaoApagar.parentElement.parentElement;
        linhaRemover.remove();
    }
});