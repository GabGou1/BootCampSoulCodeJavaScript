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

let conseguiuFazerCompra = false;

if(saldo > 200){
    console.log("Fez a compra do tênis!");
    conseguiuFazerCompra = true;
}
else{
    console.log("Sem grana suficiente!");
    conseguiuFazerCompra = false;
}

if(conseguiuFazerCompra){
    console.log("Transação realizada com sucesso!");
}

let num1 = 2, num2 = 3, num3 = 5;

if(num1 == num2 || num2 == num3 || num3 == num1){
    console.log("Os números não podem ser iguais!");
}
else if(num1 > num2 && num1 > num3){
    if(num2 > num3){
        console.log(num1 + " é maior que " + num2 + " que é maior que " + num3);
    }
    else{
        console.log(num1 + " é maior que " + num3 + " que é maior que " + num2);
    }
}
else if(num2 > num1 && num2 > num3){
    if(num1 > num3){
        console.log(num2 + " é maior que " + num1 + " que é maior que " + num3);
    }
    else{
        console.log(num2 + " é maior que " + num3 + " que é maior que " + num1);
    }
}
else{
    if(num1 > num2){
        console.log(num3 + " é maior que " + num1 + " que é maior que " + num2);
    }
    else{
        console.log(num3 + " é maior que " + num2 + " que é maior que " + num1);
    }
}

let mes = 10;

switch(mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Este mês não existe");
        break;
}