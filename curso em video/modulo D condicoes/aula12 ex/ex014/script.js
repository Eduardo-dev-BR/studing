
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if(hora >= 5 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        //BOM DIA!
     }else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Boa Tarde! Agora são ${hora} horas.`
        //BOA TARTE!
    } else if (hora >= 0 && hora <= 4){
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        msg.innerHTML = `Boa Madrugada! Agora são ${hora} horas.`
        //BOA TARTE!
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        msg.innerHTML = `Boa Noite! Agora são ${hora} horas.`
        //BOA NOITE!
    }
}
