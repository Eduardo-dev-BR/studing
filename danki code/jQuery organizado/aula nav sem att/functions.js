$(function(){

    verificarcliqueMenu();

    function verificarcliqueMenu(){
        $('a').click(function(){
            var href = $(this).attr('href');
            $.ajax({
                'beforeSend': function(){
                    console.log("Estamos chamando o beforeSend!");
                },
                'tumeout': 10000,
                'url': href,
                'error': function(jqXHR,textStatus,errorThrown){
                    if(jqXHR.statusText =='Not Found'){
                        console.log("Página nao encontrada.")
                    }
                },
                'success':function(data){
                    $('#container').html('');
                    $(data).appendTo('#container').fadeIn();
                }
            })
            return false;
        })
    }
})