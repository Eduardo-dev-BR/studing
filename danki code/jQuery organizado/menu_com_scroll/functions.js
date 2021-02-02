$(function(){


    $(window).scroll(function(){  
        var windowOffY = $(window).scrollTop();
        var windowHeight = $(window).height();
        $('.sessao').each(function(){
            var elOffY = $(this).offset().top;
            if(elOffY+30 < (windowOffY + windowHeight) &&
                elOffY+30+$(this).height() > windowOffY ){
                    // console.log("Estamos na sesão "+$(this).attr('target'));
                    $('a').css('border-bottom','0')
                    var target = $(this).attr('target')
                    $('.'+target).css('border-bottom','2px solid #444')
                    return
            }
        })
    })



})