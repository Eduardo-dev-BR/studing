
$(function(){
  
    /*---------------|Criando janela modal e formulário|-----------------------*/

    abrirJanela();
    verificarCliqueFechar();

    // var frase = "Olá mundo!"
    // var ver = frase.match(/Ola/)
    
    // if(typeof(ver) == 'object' && ver != null){
    //   console.log("Encontramos algo!")
    // } else{
    //   console.log("!Não encontramos nada!")
    // }


  //exemplo de validação de email
    // var frase = 'eduardo@hotmail.com';
    // var verifica = frase.match(/^(.*?)@(.*?)$/); // ^ -> garante que vai pegar do inicio // $ <- garante que vai pegar até o final

    // if (verifica != null){
    //   console.log("Encontramos algo!");
    //   console.log(verifica[1])
    //   console.log(verifica[2])
    //   console.log(verifica[3])
    // }else{
    //   console.log("Não encontramos nada")
    // }
    
    function abrirJanela(){
        $('.btn').click(function(e){
          e.stopPropagation();
            $('.bg').fadeIn();
        });
    }
    function verificarCliqueFechar(){

      var el = $('body,.closeBtn')

      el.click(function(){
        $('.bg').fadeOut();
      })
    }

    $('.form').click(function(e) {
      e.stopPropagation();
    })

    // var but = $('.closeBtn')
    // but.hover(function(){
    //   $('.closeBtn').css('background','darkgray')
    // })


// /*---------------|Validando formulário na prática|-----------------------*/
$('form#form1').submit(function(e){
  e.preventDefault();
    var nome = $('input[name=nome]').val()
    var telefone = $('input[name=telefone]').val()
    var email = $('input[name=email]').val()

    var amount = nome.split(' ').lenght // contando a quantidade de espaços
    var splitStr = nome.split(' ')
    if(amount >= 2){
      console.log('Deu certo!')
      for(var i = 0; i < amount; i++ ){
        if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}+$/)){
          
        }else{
          $('input[name=nome]').css('border','2px solid red')
          $('input[name=nome').data('invalido','true')     
          return false;
        }
      }
    }else{
      $('input[name=nome]').css('border','2px solid red')
      $('input[name=nome').data('invalido','true')     
      return false;
    }

    return  false;

})


});

