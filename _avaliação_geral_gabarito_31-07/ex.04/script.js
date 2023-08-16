/*
 04 - Imagine que você é um professor e precisa calcular a média final das notas de um aluno e informar a sua situação (aprovado, recuperação ou reprovado). Escreva um programa que solicite ao usuário que informe o nome do aluno e as 4 notas utilizando a função prompt. Em seguida, calcule a média final e armazene o resultado na variável mediaFinal. Utilize uma estrutura condicional para verificar a situação do aluno e exiba uma mensagem de alerta contendo o nome do aluno, a média final em pontos e a sua situação. 
*/

const nomeAluno = prompt("Digite o nome do aluno:");
const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));
const nota3 = Number(prompt("Digite a terceira nota:"));
const nota4 = Number(prompt("Digite a quarta nota:"));

const mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

let situacao;
if (mediaFinal >= 7) {
  situacao = "aprovado";
} else if (mediaFinal >= 5) {
  situacao = "recuperação";
} else {
  situacao = "reprovado";
}

alert(`${nomeAluno} obteve média final ${mediaFinal.toFixed(2)} e está ${situacao}.`);