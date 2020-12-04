$(function(){

    verificarCliqueMenu();

    function verificarCliqueMenu(){
        $('a').click(function (){
            var href = $(this).attr('href');
            $.ajax({
                'url': href
            })
            return false;
        })
    }
})