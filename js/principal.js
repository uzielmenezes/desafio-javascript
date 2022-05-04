var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var primeiroPeso = paciente.querySelector(".info-peso").textContent;

var primeiraAltura = paciente.querySelector(".info-altura").textContent;

var primeiroImc = primeiroPeso / (primeiraAltura*primeiraAltura);