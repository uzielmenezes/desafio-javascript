var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){ // funcão anônima para monitorar o click, no caso, do botão do formulário
	event.preventDefault();								// fazendo com que o padrão do html não seja executado
	var form = document.querySelector("#form-adiciona"); // buscando o formulário e os seus valores específicos
	// Extraindo informações do paciente do form
	var paciente = obtemPacienteFormulario(form);

	//  cria a tr e a td do paciente
	var pacienteTr = document.createElement("tr"); // criando uma tr a partir do click do botão

	var nomeTd = document.createElement("td"); // criando td's para cada parâmetro
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;            // trocando os valores dos td's de acordo com o input do usuário
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);        
	pacienteTr.appendChild(nomeTd);    // adicionando os td's ao tr
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);  

	// adicionando o paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes"); // buscando o tbody

	tabela.appendChild(pacienteTr);                         // adicionando o tr ao tbody
});


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
