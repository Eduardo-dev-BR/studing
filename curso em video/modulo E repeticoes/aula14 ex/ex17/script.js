function tabuada(){

    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')
    let n = Number(num.value)

    if(num.value.length == "0"){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = "" //para limpar a area da tabuada antes de colocar uma nova
        
        for(let c = 1;c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}