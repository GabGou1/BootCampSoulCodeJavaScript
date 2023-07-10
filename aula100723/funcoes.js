//Funções ou function -> Rotina

let num1 = 4;
let num2 = 5;
function multiplicar() {
   console.log("O primeiro numero é " + num1);
   console.log("O segundo numero é " + num2);
   console.log("O produto é " + (num1 * num2));
}

multiplicar();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let num = NaN;
console.log(isNaN(num)); // Se não é um numero

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let result = console.log("Oi!");
console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

num = 12.4;
result = isNaN(num); // Não é necessário colocar Number. para funcionar o isNAN
console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

result = isFinite(num); // Também é possível colocar a variável Infinity
console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

result = parseInt(num); // Converte Float para Int
console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

result = parseFloat(num);
console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

result = Number.isInteger(num); // Inteiro true ou false, para verificar se o numero é float, basta usar o false da variável
console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numero = 25.548;
console.log(numero.toFixed(2)); // Máximo de casas decimais
console.log(numero.toFixed(1));

console.log(numero.toPrecision(4));

console.log(numero.toString());

numero = numero.toString();
console.log(numero.replace(".", ",")); // Substituição em String

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let texto = "   Java Script";

console.log(texto.charAt(9)); // Imprime o caracter naquela posição

console.log(texto.concat(" é muito bom,", " Java é muito ruim!")); // Concatenação

console.log(texto.charAt(texto.length-1)); // O charAt faz a contagem a partir do 0, e o length não, por esse motivo é diminuído em 1

console.log(texto.trim()); // Remove os espaços em branco do começo e fim da variável (não do meio)

console.log(texto.replaceAll(" ", "")); // Remove todos os espaços vazios

console.log(texto.includes("Java"));

console.log(texto.toLowerCase())
console.log(texto.toUpperCase())

let busca = "Java"
let textoMinusculo = texto.toLowerCase(); // Tudo minúsculo
let buscaMinuscula = busca.toLowerCase();
console.log(texto.toLowerCase().includes(busca.toLowerCase())) // Não considera maiúscula nem minúscula

console.log(texto.indexOf("Script")); // Caso retorne -1, o valor é inexistente (Caso coloque uma string, ele retorna a posição onde se inicia a string)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Math -> Biblioteca Matemática
console.log(Math.ceil(2.3789)); // Arredonda para cima
console.log(Math.floor(2.3789)); // Arredonda para baixo
console.log(Math.round(2.7389)); // Arredonda para o mais próximo
console.log(Math.sqrt(625)); // Raiz quadrada
console.log(Math.random() * 100 + 1); // [1, 100]