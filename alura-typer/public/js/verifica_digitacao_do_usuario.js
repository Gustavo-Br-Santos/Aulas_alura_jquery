
var campo = $(".campo-digitacao");

function verifica_digitacao_usuario(){
	// Guarda na variavel frase o texto da frase
	var frase = $(".frase").text();
	
	campo.on("input", function(){
		var digitado = campo.val();
		// A variavel comparavel ira dividir a frase apenas 
		// até o trecho que o usuario já digitou. É possível
		// fazer isso usando o metodo substr que recebe dois 
		// indices do trecho que deve trazer da string.
		var comparavel = frase.substr(0, digitado.length);


		if(comparavel == digitado){
			campo.addClass("borda-verde")
			campo.removeClass("borda-vermelha")
		}else{
			campo.addClass("borda-vermelha")
			campo.removeClass("borda-verde")
		}
	})
}

