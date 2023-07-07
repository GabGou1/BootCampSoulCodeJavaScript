for (let i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
let vezes = 1;
let numero, ultimo = 1, penultimo = 0;
while(vezes <= 10){
    numero = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = numero;
    console.log(numero);
    vezes++;
}

console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
numero = 50;
let soma = 0, final = 0;
for (let i = 0; i <= numero; i++) {
    if(!(i % 2 == 0)){
        soma = i;
        final = final + soma;
    }
}
console.log(final);

console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
numero = 4;
for (let i = 0; i <= 10; i++) {
    console.log(numero + " * " + i + " = " + numero * i);
}

console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
for (let i = 0; i <= 100; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
}

console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
let lado = 7;
let base = 1
for (let i = 0; i <= lado; i++) {
    let linha = "";
    for (let i = 0; i < base; i++) {
        linha += " * "
    }
    base+=1;
    console.log(linha);
}

console.log("/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
function imprimirTrianguloMeio(linhas) {
    for (let i = 1; i <= linhas; i++) {
        let espacos = ' '.repeat(linhas - i);
        let hashtags = '*'.repeat(2 * i - 1);
        console.log(espacos + hashtags);
    }
}
imprimirTrianguloMeio(5);