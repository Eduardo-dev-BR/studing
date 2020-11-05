window.onload = function(){
    /*------------variaveis-------------
    // var nome;
    // var idade;
    // nome = "Eduardo"; //string, number (inteiros ou reais), ou boolean
    // idade = 24;

    var nome = "Eduardo", idade = 23;
    
    alert("Olá "+nome);
    alert("Você tem "+idade+" anos");*/

    /*-------------arrays e objetos-------------
    // var nome1 = "Eduardo", nome2 = "João", nome3 = "Maria";
    // var nome = [];
    // nome[0] = "Eduardo" //começa sempre a contar pelo 0
    // nome[1] = "João"
    // nome[3] = "Maria"

    // console.log(nome[1]);

    var animal = {};
    //objeto é aquilo que podemos definir as propriedades

    // animal.nome = []; //pode ser um array 
    // animal.peso = '24kg';
    // animal.idade = 23;
    // animal['idade'] = 24; //outra forma de declarar

    // animal.nome[0] = 'Juca';
    // animal.nome[1] =  'Fifi';

    console.log(animal.nome[1]);

    console.log(typeof(animal)); //define qual o tipo se for objeto ou array ele irá retornar objeto
    */
    
    /*-----------operações matematicas------------*/
    //parecido com o visualg 

    // var idade = 2020-1996
    // console.log(idade);
    
    /*-------------condicionais e operadores----------*/
    // = - recebe
    // == - igual à
    // === - identico à
    // <, >, <=, >=
    // != - diferente de
    // !== diferente absolutamente de
    
    // var nome = 'Eduardo';
    // if(nome == 'João'){
    //     alert('Condição Verdadeira!');
    // }else if(nome=='Eduardo'){
    //     alert('Condição Verdadeira!');
    // }else{
    //     alert('Condição Falsa!');
    // }

    // var idade ='2016-1993';
    // if(idade > 23){
    //     console.log("Eu tenho mais de 23 anos de idade!");
    // }else if(idade < 10){
    //     console.log("Menor do que 10!");
    // }else if(idade < 5){
    //     console.log("Menordo que 5!")
    // }else{
    //     console.log("Nenhuma das condições são verdadeiras!");
    // }

    // if(nome = 'Eduardo'){
    //     console.log(nome);
    // }

    // var number = '23';
    // if(number === 23){
    //     console.log("verdade");
    // }else{
    //     console.log("falso")
    // }

    /*---------------Laços de Repetição--------------*/
    
    //while - enquanto
    //----------declarar variavel antes---------

    // var repeticao = 0;
    // while(repeticao < 10){
    //     console.log("Olá mundo número: "+repeticao);
    //     repeticao+=1; //incremente um valor somando X (ou usar ++)

    // }
    // console.log("Cheguei até o final");

    //for serve apenas para numero - é o para do visualg
    // for(var numero = 0; numero < 10; numero+=1){
    //     console.log("Olá mundo "+numero)
    // }

    //   do{
    //       var nome = 'Eduardo';
    //       console.log("Olá mundo");
    //   }while(nome == 'Eduardo');

    /*------------------funções------------------*/

    // function realizarConta(num1,num2){
    //     // console.log(num1+num2);
    //     // if(num1 == 10){
    //     //     console.log("Meu número 1 é igual a 10");
    //     // }else{
    //     //     console.log("Falso!")
    //     // }
    // }

    // function realizarConta(num1,num2){
    //     return num1+num2; //posso retornar False, uma string, ou uma variável, declarando-a antes.
    // }
    //     var resultado = realizarConta(10,10);
    //     console.log(resultado) 

    // var variavel = function(){
    //     console.log("Minha função através da variável");
    // }
    // variavel();
    // console.log(typeof(variavel))

    // function teste(num1,num2){
    //     return num1+num2;
    // }
    // var variavel = teste(10,20);
    // console.log(variavel);
    
    // var obj = {'nome':'Eduardo','idade':23};
    // obj.nome = 'Joao'
    // console.log(obj.nome+' '+obj.idade); //para usar espaço é necessario aspas simples - duplas nao funciona
   
    // var obj = {'nome':'Eduardo','idade':23,'func':function(){
    //     console.log("Eduardo");
    // }};
    // obj.func()

    // var obj = {'nome':'Eduardo','idade':23};
    // obj.func = function(){
    //     console.log(obj.nome)
    // }
    // obj.func();

    //maneira de declarar variáveis multi dimensionais (matrizes)
    // var variavel =[];
    // variavel[0] = [];
    // variavel[0][2] ='Eduardo';
    // console.log(variavel[0][2]);

    //criando vários objetos
    // var variavel = [];

    // variavel.obj = {};
    // variavel.obj.nome ='Eduardo';
    // console.log(variavel.obj.nome);

    /*---------Mais sobre laços de repetição-----------*/

    // var n = 0;
    //continue
    //break
    // for(var i = 0; i <= 10; i++){
    //     // if(i == 2 || i == 3){    // ||-representa OU
    //     //     continue;
    //     // }

    //     if(i == 2){
    //         break; //ele para aonde foi definido para parar
    //     }
    //     console.log(i);
    // }

    //usando o while
    // while(n < 10){
    //     //console.log(n); //se colocado antes ele vai até o valor
    //     if(n == 5){
    //         break;
    //     }
    //     console.log(n); //se colocado depois ele vai até antes do valor
    //     n++;
    // }

    /*-----------|Switch e Case|-----------*/

    //switch e case - usado mais para identificar textos e palavras
    // var nome="Eduardo";
    // switch(nome)  
    // {
    //     case "João":
    //         alert('Joao');
    //         break; //break serve para não ficar rodando em loop e finalizar a ação.
    //     case "Eduardo":
    //         alert("Eduardo");
    //     break
    // } //da pra fazer a mesma coisa  usando if e else.

    

}