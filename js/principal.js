var titulo = document.querySelector(".titulo"); // buscando a classe título e criando sua variável

titulo.textContent = "Aparecida Nutricionista"; // alterando o conteúdo da classe título


var paciente = document.querySelector("#primeiro-paciente"); // buscando o ID do primeiro paciente e criando sua variável

var peso = paciente.querySelector(".info-peso").textContent; // buscando o contéudo de peso no id do primeiro paciente e criando sua variável

var altura = paciente.querySelector(".info-altura").textContent; // o mesmo para altura

var infoImc = paciente.querySelector(".info-imc"); // buscando a classe do imc do primeiro paciente e gerando sua variável

var pesoValido = true; // iniciação da variável de peso válido para o if

var alturaValida = true; // mesmo para altura

if(peso <= 0 || peso >= 1000){ // condição if para pesos menores ou iguais a 0 ou maiores ou iguais a 1000, informando caso seja inválido
	pesoValido = false;
	infoImc.textContent = "Peso inválido!";
}

if(altura <= 0 || altura >= 3.00){ // mesmo da condição acima, informando caso altura seja inválida
	alturaValida = false;
	infoImc.textContent = "Altura Inválida!";
}

if(pesoValido && alturaValida){ // condição if para cálculo do imc se tanto o peso como altura forem válidos
var imc = peso / (altura*altura); // calculando o imc do primeiro paciente e gerando sua variável
infoImc.textContent = imc; // buscando o conteúdo da classe do imc do primeiro paciente e atribuindo o valor do primeiro imc calculado
}
