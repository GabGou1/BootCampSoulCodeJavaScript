class Aluno{
    nome;
    idade;
    nota;

    constructor(nome, idade, nota){
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;
    }
}

let gabriel = new Aluno("Gabriel Riberi Koa", 20, 9);
let mateus = new Aluno("Mateus Riberi Koa", 18, 6);
let lucas = new Aluno("Lucas Riberi Koa", 16, 8);
let joao = new Aluno("João Silva", 19, 7);
let maria = new Aluno("Maria Santos", 21, 8);
let pedro = new Aluno("Pedro Almeida", 17, 6);

let alunos = [gabriel, mateus, lucas, joao, maria, pedro];

function vetorObj(vetor) {
    let tabela = document.querySelector("#tabela");
    for (let i = 0; i < vetor.length; i++) {
        let novaLinha = document.createElement("tr");
        let aluno = vetor[i];
        for (let prop in aluno) {
            let novaColuna = document.createElement("td");
            novaColuna.innerHTML = aluno[prop];
            novaLinha.appendChild(novaColuna);
        }
        tabela.appendChild(novaLinha);
    }
}

vetorObj(alunos);