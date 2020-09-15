$(function(){
    //inserindo texto em uma tag com formulario
    $('.form_contato').submit(function(){   
        // var input = $('.form_contato input[type=text]');
        var container = $('.container');
        var content = 'Nome: ' + $('input[name=nome]').val() +
        '<hr>E-mail: '+ $('input[name=email]').val() +
        '<hr>Telefone: ' + $('input[name=telefone]').val();

       container.html(content);//o val faz retornar pelo valor do elemento selecionado
    return false;
    })

});