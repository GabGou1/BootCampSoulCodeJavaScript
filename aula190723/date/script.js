// Date -> Data é o objeto que facilita o uso de data com JavaScript
let data = new Date(); // criar um objeto com base no tempo do sistema
console.log(data.toLocaleDateString()); // modifica o dia para o formato local
console.log(data.toLocaleTimeString()); // modifica o horario para o formato local

let agora = Date.now(); // o data/horario atual em milisegundos
console.log(agora);

// 1 segundo é igual a 1000 milisegundos
let dezMin = 60000 * 10;
let daquiAPouco = agora + dezMin;
console.log(new Date(daquiAPouco)); // Imprime em formato de data

console.log(new Date(2021, 11, 7)); // Mês começa do 0, sempre uma casa a menos, Janeiro = 0 / Dezembro = 11

const btn = document.querySelector("#enviar");

btn.addEventListener("click", () => {
    const dataCampo = document.querySelector("#dataNasc");
    const valor = dataCampo.value;
    const vetordata = valor.split("-").map(n => Number(n));
    const data = new Date(vetordata[0], vetordata[1]-1, vetordata[2]);
    window.alert(data);
});