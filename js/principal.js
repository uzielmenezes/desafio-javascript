var titulo = document.querySelector(".titulo"); // buscando a classe título e criando sua variável

titulo.textContent = "Aparecida Nutricionista"; // alterando o conteúdo da classe título


var paciente = document.querySelector("#primeiro-paciente"); // buscando o ID do primeiro paciente e criando sua variável

var peso = paciente.querySelector(".info-peso").textContent; // buscando o contéudo de peso no id do primeiro paciente e criando sua variável

var altura = paciente.querySelector(".info-altura").textContent; // o mesmo para altura

var imc = peso / (altura*altura); // calculando o imc do primeiro paciente e gerando sua variável


var infoImc = paciente.querySelector(".info-imc"); // buscando a classe do imc do primeiro paciente e gerando sua variável

infoImc.textContent = imc; // buscando o conteúdo da classe do imc do primeiro paciente e atribuindo o valor do primeiro imc calculado