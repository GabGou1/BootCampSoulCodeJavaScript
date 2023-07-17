class Pessoa{
  nome;
  idade;
  email;
}

let pessoa1 = new Pessoa();
pessoa1.nome = "Gabriel";
pessoa1.idade = 20;
pessoa1.email = "gabrielriberikoa@gmail.com";
// pessoa1.cor = "Branco"; é válido

console.log(pessoa1);

const pessoa2 = { // Mesmo objeto pessoa, mas não foi construído pela classe pessoa
  nome: "Lucas",
  idade: 16,
  email: "lucasriberikoa@gmail.com"
}

console.log(pessoa2);

const pc = {
  ram: 16,
  disco: 1,
  processador: "i9 intel",
  fonte: "1000w",
  placa: "Gigabyte"
}

const saldo = 4500;
if(saldo > 4000){
  pc.placaVideo = "RTX3090";
}

console.log(pc);

//Forma correta de se copiar um objeto -> Operador spread "..."
let n1 = 2;
let n2 = n1;
n1 = 3;
console.log(n1);
console.log(n2);

let objeto1 = { nome: "Bruna", curso: "JavaScript" }
let objeto2 = {...objeto1}; // Copiar os elementos do objeto1 e espalhar no 2
objeto1.nome = "Bruna Muller";
console.log(objeto1);
console.log(objeto2);

// Operador para apagar propriedades do objeto
delete objeto1.nome;
console.log(objeto1);