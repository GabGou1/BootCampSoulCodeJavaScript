const btns = document.querySelectorAll(".pressable");
const btnAc = document.querySelector("#ac");
const btnCalc = document.querySelector("#calc");
const visor = document.querySelector("#visor");

for(let btn of btns){
    btn.addEventListener("click", (evento) => {
        const num = evento.target.innerText;
        visor.value += num;
    });
}

btnAc.addEventListener("click", () => visor.value = "");

btnCalc.addEventListener("click", () => {
    let expressao = visor.value.replaceAll(",", ".");
    let resultado = eval(expressao).toString().replaceAll(".", ",");
    visor.value = resultado;
});