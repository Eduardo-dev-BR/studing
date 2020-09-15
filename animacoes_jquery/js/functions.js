$(function(){
//   $('.box1').fadeOut(300,function(){
//     $('.box2').fadeIn(300,function(){
//         console.log("terminamos")
//     });
//   });

//efeito toggle pra usar em menus--------------------------------------
/*$('.box1').click(function(){
    $('.box2').slideToggle(function(){
        //location.href="http://google.com" //para redirecionar pra um lugar
    });
});*/

//animate--------------------------------------
/*var timer;
var timeOut = function(){
    $('.box2').animate({
        'width':'40%',
        'height':'500px',
        'paddingTop':'100px' //ao inves de hifen, usar letra maiuscula.
    },1000);
}
 //setTimeout e setInterval--------------------------------------
$('body').click(function(){
    alert('Animação timeOut foi cancelada');
    clearTimeout(timer); //criei uma variavel timer para poder fazer a ação.
})

$('.box1').animate({
    'width':'40%',
    'height':'500px',
    'paddingTop':'100px' //ao inves de hifen, usar letra maiuscula.
},1000,function(){
    timer = setTimeout(timeOut,1500);  //depois de X tempo executar a função
});

var timer;
timer = setInterval(function(){
    alert('Olá Mundo;')
},3000);

$('body').click(function(){
    alert('Animação timeOut foi cancelada');
    clearInterval(timer); //criei uma variavel timer para poder fazer a ação.
})*/

//addClass - removeClass e clone

/*$('.box1').addClass('minhaclasse');
$('.box1').removeClass('minhaclasse');

var el = $('.box1').find('.child1');
el.css('color','red');

$('minhatag').attr('meuattr','outrovalor');
alert($('minhatag').attr('meuattr'));//função para pegar atributos*/

var el = $('#source .texto').clone();
//$('#container').html(el.html());
//el.appendTo('#container');
$('#source .texto').appendTo('#container'); //para apenas mover sem clonar

});