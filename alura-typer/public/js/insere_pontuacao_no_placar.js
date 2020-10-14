function inserePlacar(){
	var corpoTabela = $(".placar").find("tbody");
	var usuario = "Gustavo";
	var numeroPalavras = $("#contador-palavras").text();
	var linha = novaLinha(usuario, numeroPalavras);
	linha.find(".botao-remover").click(removeLinha);

	corpoTabela.prepend(linha);
}


function novaLinha(usuario, numeroPalavras){
	// Função responsável por criar novas linhas na tabela.
	// Para isso, será usado Jquery para criar elementos html com
	// suas respecticas classes e atributos.
	var linha = $("<tr>");
	var colunaUsuario = $("<td>").text(usuario);
	var colunaPalavras = $("<td>").text(numeroPalavras);
	var colunaRemover = $("<td>");
	var link = $("<a>").addClass("botao-remover").attr("href", "#");
	var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

	// Colocando os elementos filhos dentro dos elementos pais:
	link.append(icone);
	colunaRemover.append(link);
	linha.append(colunaUsuario);
	linha.append(colunaPalavras);
	linha.append(colunaRemover);

	return linha
}