var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){ // funcão anônima para monitorar o click, no caso, do botão do formulário
	event.preventDefault();								// fazendo com que o padrão do html não seja executado
	var form = document.querySelector("#form-adiciona"); // buscando o formulário e os seus valores específicos
	// Extraindo informações do paciente do form
	var paciente = obtemPacienteFormulario(form);

	//  cria a tr e a td do paciente
	var pacienteTr = montaTr(paciente);

	var erros = validaPaciente(paciente);

	if (erros.length > 0) {
		exibeMensagensErro(erros);
		return;
	}

	// adicionando o paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes"); // buscando o tbody

	tabela.appendChild(pacienteTr);    // adicionando o tr ao tbody

	form.reset();
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";

});

function exibeMensagensErro(erros) {
	var ul = document. querySelector("#mensagens-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro) {
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function obtemPacienteFormulario(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));   
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));  

	return pacienteTr;
}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validaPaciente(paciente) {

	var erros = [];

	if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!");
	if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!");
	if(paciente.nome.length == 0) erros.push("O nome não pode estar em branco!");
	if(paciente.peso.length == 0) erros.push("O peso não pode estar em branco!");
	if(paciente.altura.length == 0) erros.push("A altura não pode estar em branco!");
	if(paciente.gordura.length == 0) erros.push("A gordura não pode estar em branco!");

	return erros;
}