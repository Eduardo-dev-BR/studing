function contar(){
//defini uma variável pra cada item
let ini = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')

//Se estiver vazio exibe uma mensagem de erro
if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
    window.alert('[ERRO] Faltam dados!')


} else {
    //exibi uma mensagem para indicar a contagem
    res.innerHTML = 'Contando: '
    //converti os valores das variáveis em Number, criando novas variáveis    
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    //Por fim.. usando os valores já convertidos, criei uma variavel para o contador
    // O contador recebe o valor inicial - se o contador for menor que o valor final...
    // Faça o contador receber ELE mesmo + o valor de passo
    for (let c = i; c <= f; c +=p){
        res.innerHTML += `${c}  ` //Pra poder dar espaços entre os números, usei a crase e o template string
    }
}


}