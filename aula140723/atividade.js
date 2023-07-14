// Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.
let vetor = [12, 24, 7], resposta = 0;
vetor.forEach(function(num){resposta += num;});
console.log(`Os números somados da array resultam em ${resposta}`);

// Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.
vetor = ["Gabriel", "Mateus", "Lucas"];
resposta = "";
vetor.forEach(function(letra, palavra){
    resposta += letra;
    if(palavra !== vetor.length -1){
        resposta += ", ";
    }
});
console.log(`Os nomes concatenados são resposta ${resposta}`);

// Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.
vetor = [37, 15, 82, 63, 49];
function maiorNumero(numeros) {
    let maior = numeros[0];
    for(let n in numeros){
        if(numeros[n] > maior){
            maior = numeros[n];
        }
    }
    return maior;
}
console.log(`O maior número é ${maiorNumero(vetor)}`);

// Crie uma função que receba um vetor de números e retorne a média dos elementos.
vetor = [8, 9, 5];
function media(numeros){
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }
    resultado = resultado / numeros.length;
    return resultado.toFixed(2);
}

console.log(`A média dos números da array, é ${media(vetor)}`);

// Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.
console.log(`Os valores elevados a 2, resultam em - ${vetor.map(num => num ** 2)}`);

// Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.
vetor = ["Banana", "Maça", "Pera", "Abacate", "Abacaxi", "Melão", "Melancia"];
console.log(`As palavras que começam com a letra A dentro do array, são ${vetor.filter(palavra => (palavra[0].toLowerCase() == "a"))}`)

// Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.
vetor = [37, 15, 82, 63, 49];
function multiplicacao(numeros) {
    let resultado = [];
    numeros.forEach(function (n) {
        resultado.push(n * 3);
    });
    return resultado;
}
console.log(`A multiplicação dos numeros dentro do vetor é ${multiplicacao(vetor)}`);

// Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array.
vetor.push(10);
console.log(`O vetor possuí o numero 10 incluso? - ${vetor.includes(10)}`);