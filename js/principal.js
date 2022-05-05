var titulo = document.querySelector(".titulo"); // buscando a classe título e criando sua variável

titulo.textContent = "Aparecida Nutricionista"; // alterando o conteúdo da classe título


// var paciente = document.querySelector("#primeiro-paciente"); buscando o ID do primeiro paciente e criando sua variável

var pacienteTotal = document.querySelectorAll(".paciente"); // buscando todos os elementos com a classe paciente

for(var i = 0; i < pacienteTotal.length; i++) {  // função for para calcular os imcs de acordo com cada paciente da lista

	var paciente = pacienteTotal[i];

	var peso = paciente.querySelector(".info-peso").textContent; // buscando o contéudo de peso no id do primeiro paciente e criando sua variável

	var altura = paciente.querySelector(".info-altura").textContent; // o mesmo para altura

	var infoImc = paciente.querySelector(".info-imc"); // buscando a classe do imc do primeiro paciente e gerando sua variável

	var pesoValido = true; // iniciação da variável de peso válido para o if

	var alturaValida = true; // mesmo para altura

	if(peso <= 0 || peso >= 1000){ // condição if para pesos menores ou iguais a 0 ou maiores ou iguais a 1000, informando caso seja inválido
		pesoValido = false;
		infoImc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido"); // adicionando uma classe no java para ser alterado no css, caso peso seja inválido
	}

	if(altura <= 0 || altura >= 3.00){ // mesmo da condição acima, informando caso altura seja inválida
		alturaValida = false;
		infoImc.textContent = "Altura Inválida!";
		paciente.classList.add("paciente-invalido"); // adicionando uma classe no java para ser alterado no css, caso altura seja inválida
	}

	if(pesoValido && alturaValida){ // condição if para cálculo do imc se tanto o peso como altura forem válidos
	var imc = peso / (altura*altura); // calculando o imc do primeiro paciente e gerando sua variável
	infoImc.textContent = imc.toFixed(2); // buscando o conteúdo da classe do imc do primeiro paciente e atribuindo o valor do primeiro imc calculado
	}									// toFixed para setar as casas decimais de uma variável,

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){ // funcão anônima para monitorar o click, no caso, do botão do formulário
	console.log("oi");
});