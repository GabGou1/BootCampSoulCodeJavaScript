// Estrutura de Repetição

// Incrementar o valor em uma unidade
for (let i = 0; i < 10; i++) {
   console.log(i);
}

console.log("=====================================================================================================================");
// Incrementa o valor do numero em duas unidades
for (let i = 0; i < 10; i += 2) {
   console.log(i);
}

console.log("=====================================================================================================================");
for (let i = 10; i >=0; i--) {
   console.log(i);
   
}

console.log("=====================================================================================================================");
//for -> Uma quantidade de repetições determinada
//while -> Uma quantidade de repetições indeterminada
let num = 92;
let ePrimo = true;
for (let i = 2; i < num; i++) {
   if(num % 1 == 0){
      ePrimo = false;
   }
}

if(ePrimo){
   console.log("O numero é primo!");
}
else{
   console.log("O numero não é primo!");
}