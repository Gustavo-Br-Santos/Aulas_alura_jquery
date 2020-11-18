$("#botao-placar").click(mostraPlacar);

// Slide toggle faz uma pequena animação de sumir e aparecer aos poucos
// O .stop() é importamte porque evita que se o usuário clicar diversas vezes
// repetidas para sumir e mostrar, ele só executo o comando do último clique, 
// e não fique tentando repetir executar todos os cliques

function mostraPlacar(){
	$(".placar").stop().slideToggle(600);
}