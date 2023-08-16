// faça um algoritmo que pergunte ao usuario uma operaçao e um numero e depois exiba sua respectiva tabuada;

//considerar (+,-,*,/)


let valor = parseInt(prompt("qual operacao deseja usar?\n [1]adicao\n  [2]subtracao\n [3]multiplicacao\n [4]divisao\n"))
let operacao = parseFloat(prompt("digite um valor"))
switch (valor) {
    case [1]:
        alert ("adicao")  
       //adicao
while(i<=10){
    console.log ('${operacao} + ${i} = ${operacao + i}');
i++;
       }      

    case [2]:
        alert ("subtracao")
        //subtracao
while(i<=10){
    console.log ('${operacao} + ${i} = ${operacao + i}');
i++;
        }     


    case [3]:
        alert ("multiplicacao")
       //multiplicacao
while(i<=10){
    console.log ('${operacao} + ${i} = ${operacao + i}');
i++;
       }      

    case [4]:
        alert ("divisao")

let i = 0;

//adicao
while(i<=10){
    console.log ('${operacao} + ${i} = ${operacao + i}');
i++;
}
 
}
