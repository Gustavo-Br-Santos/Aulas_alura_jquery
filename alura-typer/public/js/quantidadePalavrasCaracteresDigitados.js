// Seleciona o campo de digitação
var campo = $(".campo-digitacao");

// Aciona uma função anonima cada vez que inserir dados no campo
campo.on("input", function () {
	// pega os valores dentro do campo
	var conteudo = campo.val();
	var quantidadePalavras = conteudo.split(/\S+/).length - 1;
	var quantidadeCaracteres = conteudo.length;

	// Seleciona o contador de palavras do html e insere os valores atuais
	$("#contador-palavras").text(quantidadePalavras);
	$("#contador-caracteres").text(quantidadeCaracteres);
});