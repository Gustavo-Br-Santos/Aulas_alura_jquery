$("#botao-frase").click(fraseAleatoria)


// Iniciamos a usar Ajax
// O comando $.get é muma função assincrona que irá fazer uma requisição tipo get
// e precisa receber dois argumentos: a url da requisição e uma função
// Nesse caso, o parâmetro data da função anonima será o que será retornado pela
// requisição com ajax


function fraseAleatoria(){
	$.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria(data){
	// Armazena a frase nessa variavel
	var frase = $(".frase");

	// Gera os numeros aleatórios conforme o tamanho do array da requisição
	var numeroAleatorio = Math.floor(Math.random() * data.length);

	// Troca a frase por uma frase retornada da requisição Ajax
	frase.text(data[numeroAleatorio].texto);

	atualizaTamanhoFrase();
	atualizaTempoInicial(data[numeroAleatorio].tempo);
}