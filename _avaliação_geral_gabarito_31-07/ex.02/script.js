/*
 02 - Imagine que você está indo ao supermercado e precisa fazer algumas operações matemáticas. Escreva um programa que defina duas variáveis numéricas representando o valor total das suas compras e o valor que você tem disponível para gastar. Em seguida, realize as operações de soma, subtração, multiplicação, divisão entre elas e exiba o resultado de cada operação no console. 
*/

const valorTotal = 100; // valor total das compras
const valorDisponivel = 150; // valor disponível para gastar

const soma = valorTotal + valorDisponivel;
const subtracao = valorDisponivel - valorTotal;
const multiplicacao = valorTotal * valorDisponivel;
const divisao = valorDisponivel / valorTotal;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);