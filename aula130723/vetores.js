// Vetores - Arrays
let nota = 9.6; // Variáveis simples
let notas = [6.5, 7.8, 9.0]; // Varivel composta
let times = ["Bota Fogo", "Grêmio", "Flamengo", "Fluminense"]
console.log(typeof nome);
console.log(typeof notas);
console.log(notas.length);

let pesos = [89.5, 60.0, 45.4, 67.0, 75.3]
console.log(pesos.length);
console.log(pesos[0]); // Indice -> numero que representa a posição do elemento
console.log(pesos[0] + pesos[1]);

for (let i = 0; i < pesos.length; i++) {
    console.log(pesos[i]) // Iterar sobre o vetor
}

let operacoes = [
    (n1, n2) => n1 + n2,
    (n1, n2) => n1 - n2,
    (n1, n2) => n1 * n2,
    (n1, n2) => n1 / n2
];

let acumulador = 0;
for (let i = 0; i < pesos.length; i++) {
    acumulador += pesos[i];
}
console.log(acumulador);

for (let peso of pesos) { // for each
    console.log(peso);
}

// Acesso os indices do vetor
for(let indice in pesos){
    console.log(indice);
    console.log(pesos[indice]);
}