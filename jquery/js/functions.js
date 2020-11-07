// $(document).ready(function(){

// }); 
// $(window).on('load', function(){

// }); //para executar depois de carrregar todo o documento

$(function(){

/*-------Manipulando CSC Via JQUERY--------*/
    // $('#teste').css('background-color','#ccc').css('padding-left','20px');  

    // setTimeout(function(){
    //     $('.artigo1').css('background-color','green').css('color','white');
    // },2000); //propriedade setTimeout

/*----------|EVENTOS|----------*/

    // function validarCliqueHover(){
    // $('.artigo1').click(function(){
    //     $('.artigo2').css('background-color','purple')
    // })
    // $('.artigo1').hover(function(){
    //     $('.artigo2').css('background-color','red')
    // },function(){
    //     $('.artigo2').css('background-color','') //deixar vazio para voltar a cor default
    // })

    // $('textarea').focus(function(){
    //     console.log("Estou dentro do textarea");
    // })

    // $('textarea').blur(function(){
    //     console.log("Estou fora do textarea");
    // }) //blur é pra quando retira o foco do elemento
    // }

    // function validarFormulario(){
    //     $('select').change(function(){
    //         console.log("Meu select foi alterado!")
    //     })
    // }

    // validarCliqueHover();
    // validarFormulario();

    //Eventos de redimensionamento---

    // $(window).click(function(){ //mudei pra click pq o scroll do mouse ta quebrado kkk
    //     console.log("Scroll ativo")
    // })

    //    $('a').click(function(e){
    //        e.preventDefault();
    //        return false; //faz a mesma coisa do preventDefault
    //    }) //faz com que a ação padrão fique nula
    
    /*var timer;
    $(window).resize(function(){ //pra quando redimensionamos a tela
        // console.log("Minha tela esá sendo redimentsionada")
        // setTimeout(function(){
        //     location.href = "file:///C:/Users/Eduardo/Documents/GitHub/studing/aulas%20de%20jquery/index.html"
        // },1000); //faz a pagina atualizar após um determinato tempo executando o evento

        clearTimeout(timer); //usando uma variavel, ele limpa o evento durante a ação, e ao parar ele acontece (atualiza a pagina)
        time = setTimeout(function(){
            location.href = "file:///C:/Users/Eduardo/Documents/GitHub/studing/aulas%20de%20jquery/index.html"
        },1000); //faz a pagina atualizar após um determinato tempo executando o evento
    })*/

    // $('.box').click(function(e){
    //     e.stopPropagation(); //permite que o evento só o ocorra ao clicar fora do objeto
    // })

    // $('body').click(function(){
    //     $('.box').css('opacity','0.1');
    // })

    /*--------------------------|Variáveis|----------------------------*/
    
    // var el = $('div.box'); //Maneira eficaz de manipular um objeto chamando o uma unica vez.
    //     el.css('background-color',green);
    //      function teste(){
    //         el.css('color','red');
    //      }
    // teste();

  /*------------|Dimensionando objetos Dinamicamente--------------*/
    //funcao nativa:
    // console.log($('.box').width());

    // var elWidth = $('.box').width();
    // $('.box').width('900'); //não usar em elementos onde também é utilizado padding

    // $('.box').width();
    // $('.box').css('width','900px');//forma mais comum de usar

    // console.log($('.box').width());
    // console.log("InnerWidth: "+$('.box').innerWidth()); //para setar a largura total, considerando paddings
    // console.log("OuterWidth: "$('.box').outerWidth(true)); //para setar a largura total, considerando MARGINS, border e paddings
    // Para a altura é a mesma coisa, usando Height

  /*------------|Dimensionando textos Dinamicamente--------------*/
    // var el = $('.box');
    // el.html('<div class="texto1">Meu elemento!</div>');
    // el.html(el.html()+'<h1 class="texto1">Meu texto html!</h1>'); //para adicionar sem reescrever
    
    // $('.box2').text("<div></div>"); //text não aceita html
    // $('.box2').text($('.box2').text() + "Olá Mundo!");

    // console.log($('.box2').text());

    // $('input[type=text]').val('Olá mundo!'); //val é usado para itens de formulario
    // $('textarea').text("Olá mundo")//o textarea funciona direto com o text

    // $('input[type=button]').click(function(){

    //     var str = $('input[type=text').val();
    //     //coisas que fururamente vou usar para validar formulário

    //     // console.log(v)
    //     // var var2 = v.split("@"); //separa a split em array e separa nosssa string com base no delimitador
    //     // console.log(var2);
    //     // console.log(str.substr(1,4)); //substr recorta a nossa string

    //     var splitstr = str.split("@");
    //     if (splitstr[1] == 'hotmail.com'){
    //         $('input[type=text]').css('opacity','0');
    //     }else{
    //         console.log("A condição não bateu");
    //     }
    // });

  /*------------|Manipulando a posição no DOM|--------------*/
  //  $('.box div').eq(0).append('<h3>Meu elemento adicionado dinâmicamente</h3>');
  //posso selecionar dentro de qual elemento - coloca no final do meu elemento -- .eq() seleciona qual elemento eu posso usar

  //  var el = $('<h3>Meu conteudo</h3>').appendTo($('.box')).css('color','red'); //ou posso adc inline
  //  el.css('color','red'); //para adc dinamicamente e manipular o css do objeto...

  // $('.box').prepend('<h3>OIá mundo</h3>'); //adiconar antes do elemento
  //  var el = $('<h3>Meu conteudo</h3>').prependTo($('.box')).css('color','red'); //ou posso adc inline

  //after e before - adicionando depois do elemento dinamicamente
  // var t = 'meu conteudo após a div box';
  // $('.box div').after(t);
  // $('.box div').before(t).css('color','red');
  //para fazer igual o append e prepend usando after e begore
  // var t = '<p>meu conteudo após a div box</p>'; //para funcionar tem que adc o conteudo como elemento
  // $(t).insertAfter($('.box')).css('color','green'); //usando o before faz a mesma coisa só que depois

  //removendo elementos da página

  // setTimeout(function(){
  //   $('.box').eq(1).remove(); //boa ideia pra fazer o meu slider!!!!
  // },3000)

  /*--------------------|Eventos dinâmicos e mais conceitos|-------------*/

  // $('a').click(function(){
  //   $('.teste').css('display','block');
  //   // return false;
  // })
  
  // $('a').click(function(){
  //   alert('Olá mundo!');
  // })

  // $('body').on('click','a',function(){  //adicionar para que o evento ocorra mesmo adc o elemento dinam. após o evento.
  //   alert('Olá mundo')
  //   return false;
  // })
  // setTimeout (function(){
  //   $('body').html('<a href="">Meu link!</a>');

  // },3000)
    // var func = function(){
      // $(this).css('background-color','green'); //this - faz referencia ao elemento à ser modificado
      // $('input[type=text').eq($(this).css('background','green')); //outra forma de fazer
      // console.log($(this).index());
    // }
  // $('input[type=text]').keyup(func); // keyup - quando soltar a tecla - keydown quando pressionada a tecla

  /*----------------|Formulario com Jquery|-------------------*/
    
  // $('.form_contato').submit(function(){

  //   var container = $('.container');
  //   var content = 'Nome: ' + $('input[name=nome]').val()+
  //   '<hr>email: ' + $('input[name=email]').val()+
  //   '<hr>Telefone' + $('input[name=telefone]').val();
    
  //   container.html(content); //val - a gente pega tudo que tem dentro do text;


  //     return false; //para a pagina nao atualizar
  //   })

  /*----------------|**Efeitos e animações**|-------------------*/


  // $('.box').fadeOut(2000,function(){
  //   $('.box2').fadeIn(3000,function(){
  //     console.log("terminamos a animação")
  //   })
  // });//para sumir 

    // $('.box').click(function(){
    //   $('.box2').slideToggle(1000,function(){
    //     alert("deu bom");
    //   });
    // });

    /*----------------|**Animate, interval e Timeout**|-------------------*/

    // var timer;
    // var timeOut = function(){
    //   $('.box2').animate({
    //     'width':'40%',
    //     'heigth':'500px',
    //     'marginLeft':'100px',
    //     'padding-top':'20px'
    //   },2000);
    //  }

    //  $('.botao').click(function(){
    //    alert("Animação com timeout foi cancelada!");
    //    clearTimeout(timer); //para parar o timeout
    //  })


    // $('.box1').animate({
    //   'width':'40%',
    //   'heigth':'500px',
    //   'marginLeft':'100px', //para usar atributos de 2 nomes
    //   'padding-top':'20px'
    // },2000,function(){
    //   setTimeout(timeOut,10000);
    //   // console.log("terminamos a animação");
    // }); 

    // var timer;

    // $('.botao').click(function(){
    //     console.log("intervalo cancelado");
    //    clearInterval(timer);
    // })

    // timer = setInterval(function(){ //a cada X segundos executa uma função
    //   alert("olá mundo");
    // },3000);
    // Usado para chat de mensagens para fazer verificações de mensagens e etc.. 

    /*----------------|**Manipulando Classes dinamicamente**|-------------------*/
    // $('.box1').addClass('minhaclasse'); //muito legal para fazer transições
    // $('.box1').removeClass('minhaclasse');

    // // $('.box1 > .child1 > .child2').css('color','red'); //forma convencional css
    // var el = $('.box1').find('.child1').find('.child2').css('color','green')//para aplicar em uma classe especifica
    // el.css('color','blue'); //mais organizado

    // $('minhatag').attr('meuattr','outrovalor');
    // alert($('minhatag').attr('meuattr')) //invocando tag e atributos personalizados

    /*----------------|**Clonar e Mover objetos**|-------------------*/
    // var el = $('#source .texto').clone();
    // $('.container').html(el.html()); //clona dentro da tag
    
    // $('#source .texto').appendTo('.container'); //para mover para a tag sem clonar

    /*---------------|O que é Ajax|-----------------------*/
    $.ajax({
      url:'https://studing/jquery/conteudo.html',
    }).done(function(data){
      console.log(data);
      // $('#container').append(data);
    });


});