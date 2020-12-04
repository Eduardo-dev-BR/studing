
$(function(){
  
  abrirJanela();
  verificarCliqueFechar();

  
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


})