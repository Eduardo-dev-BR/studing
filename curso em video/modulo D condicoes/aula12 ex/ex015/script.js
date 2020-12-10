function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(Number(fano.value) > 100 || Number(fano.value) <= 0 || Number(fano.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero ="Homem"

            if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src','hcrianca.png')
            } else if (idade < 30){
                //Jovem
                img.setAttribute('src','hjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','hadulto.png')
            } else {
                //Idoso
                img.setAttribute('src','hidoso.png')
            }

        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src','mcrianca.png')
            } else if (idade < 30){
                //Jovem
                img.setAttribute('src','mjovem.png')
            } else if (idade < 55) {
                //Adulto
                img.setAttribute('src','madulto.png')
            } else {
                //Idoso
                img.setAttribute('src','midosa.png')
            }
        }
                res.style.textAlign = 'center'
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                res.appendChild(img)
    }
}

    //parei em 13:20