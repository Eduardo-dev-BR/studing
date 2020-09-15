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
/*setTimeout(function(){
    $('.box').remove(); //.eq = se eu tiver mais de um elemento igual, com o eq eu consigo pegar 1 apenas
},3000);  //definindo quanto tempo vou esperar pra excluir com a funcção de js SetTimeOut*/

//alterando display de um objeto
/*$('div').css({"width":"50px","height":"50px","background-color":"green","display":"none"});
    $('a').click(function(){
        $('div').css('display','block');
         return false;  //serve para não deixar a pagina atualizar após executar a funcao
    })*/

//funcao click e on(click) - a importancia do return false - invocando o link antes e depois
    /* $('a').click(function(){
        // alert('olá, mundo!');
    })

    $('body').on('click','a',function(){
        alert('olá mundo!');
        return false;
    })

    $('body').html('<a href="">Meu Link!</a>');*/

$(function(){
    $('body').html('<form><input type="text"></input><input type="text"></input></form>');

    var func = function(){
        //$(this).css('background','green'); //executa a ação no elemento que for selecionado.
        $('input[type="text"]').eq($(this).index()).css('background','green'); 
        //executa a ação com base no elemento equivalente ao index
        console.log($(this).index()); //para retornar qual o elemento do tipo estamos selecionando.
    }

    //$('input[type=text]').keyup(func);//quando soltar a tecla
    $('input[type=text]').keydown(func);//quando pressionar a tecla

});