const num1 = 5;
const num2 = 8;
const num3 = 4.5;

/*
   Operações Aritméticas
   + Adição
   - Subtração
   * Multiplicação
   / Divisão
   ** Exponenciação
   % Resto da Divisão
*/

let result;

result = num1 + num2; // 13
console.log(result);

result = num1 - num2; // -3
console.log(result);

result = num1 * num2; // 40
console.log(result);

result = num1 / num2; // 0.625
console.log(result);

result = num1 ** num2; // 390625
console.log(result);

result = num2 % num3; // 3.5
console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pega o valor anterior e soma com o valor dado
result += 6.5;
console.log(result);

result -= 5;
console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Operadores de Incremento e Decremento
/*
   a++ -> Pós incremento
   ++a -> Pré increcemto
   a-- -> Pós Decremento
   --a -> Pré Decremento
*/

let a =0;
console.log(a); // 0

// POS INCREMENTO SOMENTE DEPOIS DA LINHA DE CÓDIGO
console.log(a++); // 1

// PRE INCREMENTO ANTES
console.log(++a); // 2

//PÓS DECREMENTO
console.log(a--); // 1

//PRÉ DECREMENTO
console.log(--a); // 0

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Operadores Relacionais
/*
   < Menor que
   > Maior que
   <= Menor ou igual
   >= Maior ou igual
   == Igual a
   === Igual a e mesmo tipo
   != Diferente de
*/

const n1 = 9;
const n2 = 11;
const n3 = 9;
const n4 = 13;
const n5 = "11";

result = n1 < n2;
console.log(result); // TRUE

result = n1 > n2;
console.log(result); // FALSE

result = n2 <= n1;
console.log(result); // FALSE

result = n1 >= n3;
console.log(result); // TRUE

result = n2 == n5;
console.log(result); // TRUE

result = n2 === n5;
console.log(result); // FALSE

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Operadores Lógicos
/*
   && -> E
   || -> OU
   ! -> NÃO
*/

console.log(true);
console.log(false);

console.log(true && true); // TRUE
// && se um resultado for falso é falso
console.log(true && false); // FALSE

// || é o inverso, se um for true, o resultado será true
console.log(true || false); // TRUE
console.log(!true || false); // FALSE

// A precedência é o || OU
console.log(true || true && false); // TRUE
// A precedência é o && E
console.log((true || true) && false); // FALSE

let idade = 23;
calculo = (idade >= 18) && (idade <= 65);
console.log(calculo);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Operador Ternário
let mensagem;
let nota1 = 6;
let nota2 = 5;
let condição = (nota1 + nota2)/2 >= 7;

//Indica uma condição, e retorna o primeiro valor caso seja verdadeiro, e o segundo caso seja falso
mensagem =  condição? "Aprovado" : "Reprovado";
console.log(mensagem);

// aritméticos > relacionais > lógicos