// PAR OU ÍMPAR
let numero = 9;
condicao = numero % 2 == 0;
let mensagem;

mensagem = condicao ? "PAR" : "IMPAR";
console.log(mensagem);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
let num1 = 8;
let num2 = 6;
let num3 = 7;

mensagem = (num1 + num2 + num3) / 3
console.log(mensagem);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
num1 = 45;
condição = num1 % 3 == 0 && num1 % 5 == 0;

mensagem = condição ? "É divisível por 3 e 5 ao mesmo tempo" : "Não é divisível por 3 e 5 ao mesmo tempo"
console.log(mensagem);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
let celsius = 24;
let calculo = (celsius * 1.8) + 32
console.log("O valor em Fahrenheit é de " + calculo);

let fahrenheit = calculo;
calculo = (fahrenheit - 32) / 1.8;
console.log("O valor em celsius era de " + calculo);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
num1 = 1;
num2 = 4;
num3 = 12;
let delta = num2**2 - 4*num1*num3;

console.log(delta);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
let idade = 10;
calculo = idade >= 18;

mensagem = calculo ? "Pode dirigir" : "Não Pode Dirigir";
console.log(mensagem);