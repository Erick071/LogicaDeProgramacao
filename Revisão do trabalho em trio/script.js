//1. Escreva um programa em JavaScript que solicite dois números ao usuário e exiba o maior número no console. Utilize uma estrutura de decisão if para comparar os números e exibir o maior número no console.


/*
let num1 = Number(prompt(`Digite o primeiro número.`));
let num2 = Number(prompt(`Digite o segundo número`));

if(num1>num2){
    console.log(`Este número ${num1} é o maior`)
} else {
    console.log(`Este número ${num2} é o maior`)
}  
*/
//*************************************************************************

//2. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é par ou ímpar. Utilize uma estrutura de decisão if para verificar se o número é par ou ímpar, e exiba a mensagem correspondente no console.

/*let num1 = Number(prompt(`Digite um número.`));
if(num1 % 2 == 0){
    console.log(`Este número ${num1} é par`)
} else {
    console.log(`Este número ${num1} é impar`)
}*/

// ***********************************************************************

//3. Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console.

/*let num1 = Number(prompt("Digite um número qualquer, a partir de 1."));
let i = 1
while(i<=num1){
    if(i % 2 == 0)
        console.log(i)
        i++
    }*/
/*let num1 = Number(prompt(`Digite um número qualquer, a partir de 1:`));

    for(i = 1; i <= num1; i++){
        if(i % 2 == 0){
        console.log(i)
        }
    }*/

    // **********************************************************************

//4. Escreva um programa em JavaScript que solicite um número ao usuário e exiba a tabuada desse número de 1 a 10. Utilize uma estrutura de repetição while ou for para calcular e exibir a tabuada do número informado pelo usuário. O resultado deve ser exibido no console.

/*let num1 = parseInt(prompt("Digite um número entre 1 e 10 para compor a tabuada:"));
let i = 1;
for(i=1;i <= 10; i++){
    console.log(`${num1} X ${i} = ${num1 * i} `)
}*/


let num1 = Number(prompt("Digite um número entre 1 e 10 para compor a tabuada:"));
let i = 1;

while(i<=10){
    console.log(`${num1} X ${i} = ${num1 * i}`)
i++
    }
//*********************************************************************

//5. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console.

/*let num1 = Number(prompt("Digite um número:"));

if(num1 > 0){
    console.log(`Este número ${num1} é positivo.`)
} else if (num1 < 0){
    console.log(`Este número ${num1} é negativo.`)
} else {
    console.log(`Este número ${num1} é igual a zero.`)
}*/

// *********************************************************************************

//6. Escreva um programa em JavaScript que solicite uma letra ao usuário e verifique se ela é uma vogal ou consoante. Utilize uma estrutura de decisão if para verificar se a letra informada é uma vogal ou consoante, e exiba a mensagem correspondente no console.

/*let letra = prompt("Digite uma letra qualquer:");

if(letra == "a" | letra == "e" | letra ==  "i" | letra ==  "o" | letra == "u") {
    console.log(`Esta letra ${letra} é uma vogal.`)
} else {
    console.log(`Esta letra ${letra} é uma consoante.`)
}*/

// *********************************************************************************

//7. Escreva um programa em JavaScript que solicite uma nota ao usuário e verifique se ela é válida. Utilize uma estrutura de decisão if para verificar se a nota informada está dentro do intervalo de 0 a 10, e exiba a mensagem correspondente no console.

/*let nota = (prompt("Digite uma nota entre 1 e 10: "));
if(nota<= 10){
    console.log(`Esta nota ${nota} é válida.`)
} else{
    console.log(`Esta nota ${nota} não é válida`)
}*/

//*********************************************************************************

//8. Escreva um programa em JavaScript que exiba os números de 1 a 100 no console. Utilize uma estrutura de repetição while, do-while ou for para percorrer os números de 1 a 100 e exibir cada número no console.

/*let num1 = 1;
while(num1<=100){
    console.log(num1)
    num1 ++
}*/

/*for(num1 = 1; num1 <= 100; num1 ++){
    console.log(num1)
}*/
//****************************************************************************************


//9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.

/*let num1 = Number(prompt("digite o primeiro número: "));
let num2 = Number(prompt("digite o segundo número: "));

let operacao = (prompt("Selecione a operação que deseja realizar:\n Multiplicação (*)\n Divisão (/)\n Subtração (-) \n Adição (+) "));
let resultado;

switch (operacao){
    case "Multiplicação":
        resultado = num1 * num2
        break;
    case "Divisão":
        resultado = num1 / num2
        break;
    case "Subtração":
        resultado = num1 - num2
        break;
    case "Adição":
        resultado = num1 + num2
        break;
        default:
        resultado = "Operação inválida"
}
console.log(resultado)
*/
//10. Escreva um programa em JavaScript que solicite um número ao usuário e exiba todos os números ímpares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é ímpar, e exibir os números ímpares encontrados no console.

/*let num1 = (prompt(`Digite um número qualque a partir de 1:`));
for(i = 1; i <= num1; i+=2){
    console.log(i)
}*/

/*let num1 = (prompt(`Digite um número qualque a partir de 1:`));
let i = 1;
while(i<=num1){
    console.log(i)
    i+=2
}*/
