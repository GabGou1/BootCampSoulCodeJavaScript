// Valor médio de três numeros
let num1 = 2, num2 = 3, num3 = 4;
const questao1 = _ => (num1 + num2 + num3)/3
console.log(questao1());

// Numero de divisores
let numero = 22, divisores = "";
const questao2 = _ => {
    for(let i = 0; i <= numero; i++){
        if(numero % i == 0){
            divisores += i+ ", ";
        }
    }
    return("Os divisores do número são " + divisores);
}
console.log(questao2());

// Soma dos digitos de um numero
const questao3 = _ => {
    numero = 1234;
    let resultado = 0;
    let numeroString = numero.toString();
    for (let i = 0; i < numeroString.length; i++) {
        resultado += parseInt(numeroString[i]);
    }
    return resultado;
}
console.log(questao3());

// Inverter string
const questao4 = _ => {
    let palavra = "invertida", resposta = "";
    for (let i = palavra.length; i >= 0; i--) {
        resposta += palavra.charAt(i);
    }
    return resposta;
}
console.log(questao4());

// Velocidade média
const questao5 = _ => {
    let comprimento = 20, tempo = 10, velocidadeM = 0;
    velocidadeM = comprimento / tempo;
    return velocidadeM;
}
console.log(questao5());

// Remover vogais
const questao6 = _ => {
    let palavra = "BAtatA";
    palavra = palavra.toLowerCase();
    return palavra.replaceAll(/[aeiou]/gi, "");
}
console.log(questao6());

// Decimal para Binário
const questao7 = _ => {
    let numDecimal = 82;
    let numBinario = numDecimal.toString(2);
    return numBinario;
}
console.log(questao7());

// Duas funções
function questao8(callback) {
    let valor = callback(35)
    console.log(valor);
}
questao8(numero => (numero * 2));