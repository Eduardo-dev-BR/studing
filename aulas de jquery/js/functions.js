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

    function validarCliqueHover(){
    $('.artigo1').click(function(){
        $('.artigo2').css('background-color','purple')
    })
    $('.artigo1').hover(function(){
        $('.artigo2').css('background-color','red')
    },function(){
        $('.artigo2').css('background-color','') //deixar vazio para voltar a cor default
    })

    $('textarea').focus(function(){
        console.log("Estou dentro do textarea");
    })

    $('textarea').blur(function(){
        console.log("Estou fora do textarea");
    }) //blur é pra quando retira o foco do elemento
    }

    function validarFormulario(){
        $('select').change(function(){
            console.log("Meu select foi alterado!")
        })
    }

    validarCliqueHover();
    validarFormulario();


});