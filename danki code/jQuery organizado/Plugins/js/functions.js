$(function(){
    // Plugin Social Media
    $('#social-share').jsSocials({
        shares: ["twitter", "whatsapp","facebook"]
    })

    //Plugin mask
    $('input[name=telefone]').mask('(99)99999-9999');

    $('[data-fancybox]').fancybox({
        protect: true,
        buttons : [
          'zoom',
          'thumbs',
          'close'
        ]
      });
      
      //Bloqueio
      $('[data-fancybox="watermark"]').fancybox({
        protect    : true,
        slideClass : 'watermark',
        toolbar    : false,
        smallBtn   : true
      });
      
      // Preload watermark image
      // Please, use your own image
      (new Image()).src = "https://fancyapps.com/GJbkSPU.png";

})