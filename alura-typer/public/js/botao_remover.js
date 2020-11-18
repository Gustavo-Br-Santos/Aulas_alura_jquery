// FadeOut vai sumindo aos poucos e podemos passar tempo como parametro em ms
// Por padrão, o fadeOut leva 400 ms para fazer o elemento desaparecer.
// Porém, o fadeOut não remove o element. Por isso, precisamos excluir depois do comando fadeOut.

function removeLinha(){
	event.preventDefault();
	var linha = $(this).parent().parent();
	linha.fadeOut();
	setTimeout(function(){
		linha.remove();
	},400);
};