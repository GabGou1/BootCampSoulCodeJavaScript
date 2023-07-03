/*
   Tipagem Estática ->
   Tipagem Dinâmica -> O tipo da variável é definida de acordo com se valor (JavaScript, Python)
*/

//typeof imprime qual é o tipo de variável
let variável = 27;
console.log(typeof variável); //number

variável = "Prof. Gariel";
console.log(typeof variável); //string

variável = true;
console.log(typeof variável); //boolean

variável = {nome: "Gabriel Riberi Koa", idade: 20} //object
console.log(variável);

variável = [1, 2, 3, 4, 5] //object
console.log(variável);

variável = function(){return 1;}
console.log(variável);

variável = undefined; // Variável indefinida
console.log(typeof variável);

variável = null; // Existe uma variável vazia
console.log(typeof variável);

variável - NaN; // Não é um numero
console.log(typeof variável);