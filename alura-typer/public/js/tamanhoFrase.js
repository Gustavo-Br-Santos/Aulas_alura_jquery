// O simbolo $ é a mesma coisa que usar a função Jquery, de uma forma simplificada
// e nesse caso, esta buscando no html o elemento com a classe frase e chamendo o
// metodo text para trazer apenas o texto dessa tag
var frase = $(".frase").text();

// Conta a quantidade de palavras separando cada palavra por espaço e contando cada uma.
var numeroPalavras = frase.split(" ").length;

// Traz um objeto jquery do elemento html com o id tamanho-frase
var tamanhoFrase = $("#tamanho-frase");

// A função text, quando passado parâmetros, insere elementos dentro da tag
tamanhoFrase.text(numeroPalavras);

