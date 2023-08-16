/*
 03- Imagine que você é um professor e precisa calcular a média final das notas de um aluno. Escreva um programa que solicite ao usuário que informe as 4 notas do aluno utilizando a função prompt. Em seguida, calcule a média final e exiba uma mensagem de alerta contendo o valor da média final. 

*/

const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));
const nota3 = Number(prompt("Digite a terceira nota:"));
const nota4 = Number(prompt("Digite a quarta nota:"));

const mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

alert(`A média final do aluno é ${mediaFinal}.`);