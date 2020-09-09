$(function(){
    //inserindo texto em uma tag com formulario
    $('.form_contato').submit(function(){   
        //var input = $('.form_contato input[type=text]');
        var container = $('.container');
        
        container.html(content);
       // container.html(input.val());//o val faz retornar pelo valor do elemento selecionado

    return false;
    })

});