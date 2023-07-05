// Escopo Global

let numero1 = 22;
console.log(numero1);

// Com VAR é possível acessar a variável antes da declaração, mas ela é considerada undefined
console.log(numero2);
var numero2 = 24;

// Operação de Concatenação +
const numero = 2 + 3; // Operador de Adição
const texto = "O número é " + numero; // Operador de Concatenação
console.log(texto);

console.log("A soma de " + 2 + " com " + 3 + " é igual à " + (2+3))

let idade = 18;
let mensagem = (idade) >= 18 ? "Sua idade é " + idade + " pode ser preso!" : "Sua idade é " + idade + " vai chegar a sua vez. Se cuida!"
console.log(mensagem);

const nome = "Gabriel";
console.log("Bem vindo, " + nome);

// Estruturas Condicionais
// Condição -> Cálculo Lógico
// if -> se
const altura = 1.55;
if(altura >= 1.60){
    console.log("Entrou no brinquedo!")
}
else{
    console.log("Não entrou no brinquedo!")
}

const nivelIngles = 2;
if(nivelIngles == 1){
    console.log("Seu nível de inglês é básico!");
}
else if(nivelIngles == 2){
    console.log("Seu nível de inglês é intermediário!");
}
else if(nivelIngles == 3){
    console.log("Seu nível de inglês é avançado!");
}
else{
    console.log("Este nível não existe.");
}

// Mais de um resultado
let saldo = 250;
if(saldo > 100){
    console.log("Comprar um livro");
}
if(saldo > 200){
    console.log("Comprar um Tênis");
}
if(saldo > 1000){
    console.log("Comprar uma Bolsa");
}