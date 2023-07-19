const email = document.querySelector("#email");
const campos = document.querySelectorAll("input, textarea");

function validarEmail() {
    const valor = email.value;
    if (valor.includes("@")) {
        email.style.borderColor = "green";
    }
    else {
        email.style.borderColor = "red";
    }
}
email.addEventListener("keyup", validarEmail); // Verifica o email a cada botão pressionado no teclado

function validarCampoVazio(evento) { // Event
    const campo = evento.target; // Objeto target representa o elemento que acionou o evento
    const valor = campo.value;
    if (valor === "") {
        campo.style.borderColor = "red";
    }
    else {
        campo.style.borderColor = "green";
    }
}


// for(let campo of campos){
//     campo.addEventListener("blur", validarCampoVazio); // blur -> Quando o evento perde o foco
// }
// change -> Quando muda o foco

for (let campo of campos) {
    campo.addEventListener("change", validarCampoVazio);
}