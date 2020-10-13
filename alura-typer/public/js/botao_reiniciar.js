var campo = $(".campo-digitacao");

// Cria uma função que reinicia jogo sempre que o usiário clicar no botão;


function reiniciaJogo(){
	campo.attr("disabled", false);
	campo.removeClass("campo-digitacao-desativado");
	campo.val("");
	campo.removeClass("borda-verde")
	campo.removeClass("borda-vermelha")
	$("#contador-palavras").text("0");
	$("#contador-caracteres").text("0");
	$("#tempo-digitacao").text(tempoInicial)
	inicializaCronometro();
}

// Seleciona a tag do botão e fica escutando eventos de 
// click, e caso seja clicado, executa a função que reinicia
// o jogo.

