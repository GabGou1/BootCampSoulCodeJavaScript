// function dividir(num, den){
//     if (den == 0) {
//         return; // Retorno vazio é válido
//     }
//     return(num/ den);
// }

// const num = dividir(22, 0);
// console.log(num);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// callback -> Função que como parâmetro de outra função

// function requisicaoParaBanco(callbackSucess, callbackError) {
//     for (let i = 0; i < 1000000000000000; i++) { // Requisição feita para o servidor (simulação)
//         if (i == 100000) {
//             // aqui gerou um erro
//             callbackSucess();
//         }
//         else if(i == -1){
//             callbackError();
//         }
//     } 
// }

// function sucesso() {
//     console.log("DEU BOM!");
// }
// function erro() {
//     console.log("DEU RUIM!");
// }
// requisicaoParaBanco(sucesso, erro);

// function soma(n1, n2){
//     return(n1 + n2);
// }
// console.log(soma(2, 4));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Função anônima
// function teste(){
//     console.log("Olá Mundo!");
// }
// setInterval(teste, 2000)

// A função setTimeout será executada apenas uma única vez. Caso deseje que a execução aconteça várias vezes, então você poderá usar a função setInterval
// setInterval(function () {
//     console.log("Olá Mundo!");
// }, 2000);

//Arrow function

// () => {
//     console.log("Olá Mundo! Com timeout e arrowFunction");
// }

//parametros => escopo/instrução
// (resultado, requisição) => {
//     console.log(resultado + " " + requisição)
//     return 0;
// }

// Testando a utilidade de arrow function
function teste(callback) {
    let valor = callback(130);
    console.log(valor);
}

// Primeira forma de utilizar teste
function vezes2(numero) {
    return (numero * 2);
}
teste(vezes2);

// Segunda forma de utilizar teste
teste(function(numero){
    return numero * 2;
})

// Terceira forma de utilizar teste (Função Arrow) - Modo 1
teste((numero) => {
    return (numero * 2);
});

// Quarta forma de utilizar teste (Função Arrow) - Modo 2
teste(numero => (numero * 2));

setTimeout(_ => console.log("Olá, Mundo!"), 3000)
//Timeout -> quando o tempo passa, ele printa
//Interval -> printa de tempos em tempos