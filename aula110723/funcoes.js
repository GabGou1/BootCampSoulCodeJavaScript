// Funções que não recebem parâmetro
// Funções que retornam valores
// Funções que não retornam valores
function somar(n1, n2 = 10, op = "+") {
    switch(op){
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
    }
    return "Operação inválida!"
}

console.log(somar(30, 20, "+"));
console.log(somar(30, 20, "-"));
console.log(somar(30, 20, "soma"));

function desenhaTriangulo(altura){
    for (let i = 0; i <= altura; i++) {
        let linha = "";
        for (let j = 0; j  < (altura-i); j++) {
            linha += " ";
        }
        for(let j = 0; j < i; j++){
            linha += "* ";
        }
        console.log(linha);
    }
}

desenhaTriangulo(10);