
$(function(){
  
    /*---------------|Criando janela modal e formulário|-----------------------*/

    abrirJanela();
    verificarCliqueFechar();
  
    function abrirJanela(){
        $('.btn').click(function(e){
          e.stopPropagation();
            $('.bg').fadeIn();
        });
    }
    
    function verificarCliqueFechar(){
      var el = $('body, .closeBtn')
      el.click(function(){
        $('.bg').fadeOut();
      })
    }

    var but = $('.closeBtn')
    but.hover(function(){
      $('.closeBtn').css('background','darkgray')
    })

      /*---------------|Expressões regulares|-----------------*/
    // var frase = 'Olá mundo';
    // var verifica = frase.match(/Olá/); //parametros case sensitive - descrever exatamente como é

    // // console.log(typeof(verifica));
    
    // if(verifica != null){
    //   console.log("Encontramos algo!");
    // }else{
    //   console.log("Não encontramos nada")
    // }
    /*-------------*/
    // var frase = 'eduardo@hotmail.com';
    // var verifica = frase.match(/[a-z]{3}/); //se tiver pelo menos 3 caracteres
    // var verifica = frase.match(/[a-z]{3,6}/);
    //var verifica = frase.match(/(.*?)@(.*?)/); // (.*?) -> pegue tudo que tem até encontrar o que está no meio
    // var verifica = frase.match(/^^(.*?)@(.*?)$/); // ^^(.*?) -> começando a procurar do inicio. -  após achar continue daqui(.*?) $ -> garante que vai até o final


    // if(verifica != null){
      // console.log("Encontramos algo!");
      // console.log(verifica[1]); //o que tem antes do @
      // console.log(verifica[2]); //o que tem depois do @
      // console.log(verifica[3]); //o que tem no final

    // }else{
      // console.log("Não encontramos nada")
    // }


// /*---------------|Validando formulário na prática|-----------------------*/

         


});

