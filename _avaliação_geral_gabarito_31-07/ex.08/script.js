/*
 08 - Imagine que você é um instrutor de autoescola e precisa verificar se uma pessoa pode se matricular ou não. Escreva uma função chamada "podeEntrarNaAuto" que recebe um parâmetro "idade". A função deve verificar se a pessoa tem 18 anos ou mais. Se sim, a função deve retornar a mensagem "Pode se matricular na auto escola". Caso contrário, a função deve retornar a mensagem "Não pode se matricular na auto escola". Em seguida, chame a função "podeEntrarNaAuto" quatro vezes com valores diferentes (16, 25, 17 e 18) e exiba o resultado de cada chamada no console utilizando o método "console.log()". 
*/

function podeEntrarNaAuto(idade) {
 if (idade >= 18) {
   return "Pode se matricular na auto escola";
 } else {
   return "Não pode se matricular na auto escola";
 }
}

console.log(podeEntrarNaAuto(16)); // imprime "Não pode se matricular na auto escola"
console.log(podeEntrarNaAuto(25)); // imprime "Pode se matricular na auto escola"
console.log(podeEntrarNaAuto(17)); // imprime "Não pode se matricular na auto escola"
console.log(podeEntrarNaAuto(18)); // imprime "Pode se matricular na auto escola"