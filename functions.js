$(function(){
/*var el = $('<h3>Meu conteúdo</h3>').appendTo($('.box')).css('color','red'); //tem como aplicar o css fx direto na var
//el.css('color.red'); <-- outra forma de usar 

$('.box').prepend('<h3>Olá mundo!</h3>');

var el = $('<h3>Meu Conteúdo</h3>').prependTo($('.box')).css('color', 'red'); //para aplicar antes do local sel.

var t = '<p>Meu conteúdo após a div box</p>';
$('box').after(t);

$('.box').before(t);
// mesma coisa que usar o append ou prepend
$(t).insertAfter($('.box')).css('color','red');
$(t).insertBefore($('.box')).css('color','red');*/

//removendo coisas do site
setTimeout(function(){
    $('.box').remove(); //.eq = se eu tiver mais de um elemento igual, com o eq eu consigo pegar 1 apenas
},3000);  //definindo quanto tempo vou esperar pra excluir com a funcção de js SetTimeOut

});