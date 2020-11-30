
$(function(){
  
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

    /*---------------|Criando janela modal e formulário|-----------------------*/

//     abrirJanela();
//     verificarCliqueFechar();

//     function abrirJanela(){
//       $('.btn').click(function(e){
//         e.stopPropagation();
//         $('.bg').fadeIn();
//       });
//     }

//     function verificarCliqueFechar(){

//       var el = $('body,.closeBtn');

//       el.click(function(){
//         $('.bg').fadeOut();
//     })

//     $('.form').click(function(e){
//       e.stopPropagation();
//     })

//   }
// /*---------------|Validando formulário na prática|-----------------------*/
// $('form#form1').submit(function(e){
//   e.preventDefault();
//   var nome = $('input[name=nome').val();
//   var telefone = $('input[name=telefone').val();
//   var email = $('input[name=email').val();

//   var amount = nome.split(' ').length ; //contando a quantidade de espaços e os respectivos valores
//   var splitStr = nome.split(' ');
//   if(amount >= 2){
//     for(var i = 0; i < amount; i++){
//       // console.log(splitStr[i]);
//       if(splitStr[i].match(/^[A-Z{1}[a-z]{1,}$/)){
//         // console.log("Cadastrado com sucesso")
//       }else{
//         $('input[name=nome]').css('border','2px solid red');
//         return false;
//       }
//     }
//   }else{
//     aplicarCampoInvalido$(('input[name=nome]'));
//     return false;
//   }
//   return false;
//   //Se chegou até o final é porque está tudo okay
// })

// function aplicarCampoInvalido(el){
//   el.css('border','2px solid red');
//   el.data('invalido','true');
// }
         
  abrirJanela();

  function abrirJanela(){
      $('.btn').click(function(){
          $('.bg').fadeIn();
      });
  }
  
  


});