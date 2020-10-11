var campo = $(".campo-digitacao");
var tempoInicial = $("#tempo-digitacao").text()

// Criar uma função para inicializar o cronometro.
// O método one possue um atributo chamado "focus" que aciona
// e função sempre que esse campo estiver como foco pelo usuário,
// Seja por um evento de click ou usando tab.
// A única diferença do método one para o on, que usamos anteriormente,
// é que o one só irá escutar o evento uma vez, enquanto o on irá
// acionar o evento quantas vezes for necessário.
function inicializaCronometro(){
	var tempoRestante = $("#tempo-digitacao").text()
	campo.one("focus", function(){
		// O setInterval tem a função de ficar executando
		// determinada função em um determinado período de 
		// tempo em ms. Além disso, vamos colocála dentro de uma var
		// para conseguir parar essa função quando precisarmos.
		var cronometroID = setInterval(function(){
			tempoRestante --; // Decrementa o tempo restante de um em um segundo
			$("#tempo-digitacao").text(tempoRestante); // Insere o tempo restante no HTML
			// Se o tempo restante chegar a 0, desabilitar o campo, pois acabou o tempo
			// de teste do usuario. Podemos fazer isso com o método Jquery chamado attr,
			// onde é possível adicionar atributos as nossas tags selecionadas do HTML.
			if(tempoRestante < 1){
				campo.attr("disabled", true);
				clearInterval(cronometroID);
			}

		}, 1000); // 1000 ms = 1s
	});
}
	