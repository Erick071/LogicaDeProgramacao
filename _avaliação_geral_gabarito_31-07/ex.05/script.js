/*
 05 - Imagine que você é um vendedor e precisa calcular o valor final da compra de um cliente levando em consideração um desconto. Escreva um programa que solicite ao usuário que informe o nome do cliente, o valor total da compra e a porcentagem de desconto utilizando a função prompt. Em seguida, calcule o valor final da compra com o desconto aplicado e exiba uma mensagem de alerta contendo o nome do cliente e o valor final da compra. 
*/

const nomeCliente = 'Rodrigo'//prompt("Digite o nome do cliente:");
const valorTotal = 100//Number(prompt("Digite o valor total da compra:"));
const desconto = 20//Number(prompt("Digite a porcentagem de desconto:"));

const valorComDesconto = valorTotal * (1 - desconto / 100);

console.log(1 - (desconto/100))

alert(`O valor final da compra de ${nomeCliente} é R$${valorComDesconto.toFixed(2)}.`);