$(function(){

    
    var indiceAtual = 0;
    var indiceMaximo = $('.slider img').size();
    var delay = 3000;

    /*initSlider();
    function initSlider(){
        $('.slider img').each(function(i){
            if(i == 0){
                $(this).fadeIn();
            }
        })
    }*/
    //outra forma de fazer

    initSlider();
     function initSlider(){
         $('.slider img').eq(0).fadeIn();
         setInterval(alternarSlider(),delay)
     }

     function alternarSlider(){

     }


})