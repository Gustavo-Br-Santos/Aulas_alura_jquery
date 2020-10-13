// O método Jquery .redy executa tudo que estiver dentro da função
// assim que o documento HTML acabar de ser carregado;

$(document).ready(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	verifica_digitacao_usuario();
	$("#botao-reiniciar").click(reiniciaJogo)
});

// APENAS POR CURIOSIDADE, MAS UMA ALTERNATIVA DO jQUERY DO $(document).ready 
// SERIA USAR APENAS $(), QUE FARIA EXATAMENTE A MESMA COISA. É UM ATALHO DO
// CÓDIGO ACIMA.