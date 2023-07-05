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
let num1 = 2, num2 = 5;
if(num1 > num2){
   console.log("O primeiro valor de " + num1 + " é maior do que o segundo valor, de " + num2);
}
else if(num2 > num1){
   console.log("O segundo valor de " + num2 + " é maior do que o primeiro valor, de " + num1);
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