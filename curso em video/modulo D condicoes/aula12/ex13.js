// switch e case estrutura
// switch(expressão){

//     case valor1:
//         bloco
//         break

//     case valor2:
//         bloco
//         break

//     case valor 3:
//         bloco
//          break

//     default:
//         bloco
//         break

// }

//o brake é obrigatório para nao gerar um loop infinito

var agora = new Date()
var diaSem = agora.getDay()
/*
    0-Domingo
    1-Seg
    2-Ter
    3-Qua
    4-Qui
    5-Sex
    6-Sab
*/

console.log(diaSem)

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
}