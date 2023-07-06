//Verificação de valor positivo, negativo ou nulo
let numero = 0;
if(numero > 0){
   console.log("O número é positivo!");
}
else if(numero < 0){
   console.log("O número é negativo!");
}
else{
   console.log("Valor nulo!");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Verificar idade
let idade = 18;
if(idade >= 18 && idade <= 120){
      console.log("Parabéns! Você já pode ser preso!");
}
else if(idade < 18 && idade >= 0){
      console.log("Você ainda não alcançou a maioridade!");
}
else{
   console.log("Idade inválida!");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Qual dos dois valores é maior
let num1 = 2, num2 = 5, num3 = 7;
if(num1 > num2 && num1 > num3){
   console.log("O primeiro valor, " + num1 + " é o maior!");
}
else if(num2 > num1 && num2 > num3){
   console.log("O segundo valor, " + num2 + " é o maior!");
}
else if(num3 > num1 && num3 > num2){
   console.log("O Terceiro valor, " + num3 + " é o maior!");
}
else{
   console.log("Os valores não podem ser iguais!");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Verificar se é par ou ímpar
let valor = 2;
if(valor % 2 == 0){
   console.log("O valor é par!");
}
else{
   console.log("O valor é ímpar!");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Verifique o nome da semana para verificar se é um dia útil
let nomeDia = "Domingo"

if(nomeDia === "Sábado"){
   console.log("Não é um dia útil!");
}
else if(nomeDia === "Segunda-Feira"){
   console.log("É um dia útil!");
}
else if(nomeDia === "Terça-Feira"){
   console.log("É um dia útil!");
}
else if(nomeDia === "Quarta-Feira"){
   console.log("É um dia útil!");
}
else if(nomeDia === "Quinta-Feira"){
   console.log("É um dia útil!");
}
else if(nomeDia === "Sexta-Feira"){
   console.log("É um dia útil!");
}
else if(nomeDia === "Domingo"){
   console.log("Não é um dia útil!");
}
else{
   console.log("Não é um dia da semana válido!");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Verificar se é um dia útil, e o dia da semana
let diaSemana = 2;
switch(diaSemana){
   case 1:
      console.log("Não é um dia útil, é domingo!");
      break;
   case 2:
      console.log("É um dia útil, é segunda-feira!");
      break;
   case 3:
      console.log("É um dia útil, é terça-feira!");
      break;
   case 4:
      console.log("É um dia útil, é quarta-feira!");
      break;
   case 5:
      console.log("É um dia útil, é quinta-feira!");
      break;
   case 6:
      console.log("É um dia útil, é sexta-feira!");
      break;
   case 7:
      console.log("Não é um dia útil, é sábado!");
      break;
   default:
      console.log("Digite um valor válido!");
      break;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Celsius para Fahrenheit
let celcius = -273.15, fahrenheit;
if(celcius >= -273.15){
   fahrenheit = (celcius * 1.8) + 32;
   console.log("A temperatura em celsius para fahrenheit é de " + fahrenheit.toFixed(2));
}
else{
   console.log("Temperatura não existe!");
}