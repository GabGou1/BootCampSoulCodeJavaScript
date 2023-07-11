// Quantidade de Letras 'A'
let texto = "Alemao";
let letra = "", quantidade = 0;
for (let i = 0; i < texto.length; i++) {
    letra = texto.toLowerCase().charAt(i);
    if(letra === "a"){
        quantidade++;
    }
}
console.log(texto + " tem " + quantidade + " de 'A's.");

// Raíz quadrada
let numero = 9;
console.log(Math.sqrt(numero))

// Arredondar numero
numero = 11.5
console.log(Math.round(numero));

// Valor absoluto
numero = -15;
console.log(Math.abs(numero));

// Numero aleatório
console.log(Math.floor(Math.random() * (20 - 10) + 10));

// Número específico de casas decimais
numero = 2.5672;
console.log(numero.toFixed(2));

// String para numero decimal e arredondar para anterior
let string = "16.347";
string = parseFloat(string);
console.log(Math.floor(string));

// Verificar numero
numero = 5;
console.log("Finito - " + isFinite(numero))
console.log("Infinito - " + !isFinite(numero))
console.log("Não número - " + isNaN(numero))

// Verificar string 'ba'
texto = "banana";
letra = "ba";
console.log("Possuí 'ba' - " + texto.toLowerCase().includes(letra))

// Maiúscula e Minúscula
texto = "ArtAtaq"
console.log(texto.toLowerCase());
console.log(texto.toUpperCase());

// Estrair da String
let indice = 2;
console.log(texto.charAt(indice));

// Substituir ocorrências
texto = "substituir"
console.log(texto.replaceAll("i", "e"));

// Remover espaços em branco no início e no final
texto = "  caixa ";
console.log(texto.trim());

// Inverter String
texto = "mochila";
let textoInvertido = "";
for (let i = texto.length; i >= 0; i--) {
    textoInvertido += texto.charAt(i);
}
console.log(textoInvertido);