let soma = 0;
let count = 5; 

for (let i  = 1; i <= count; i++) {
    let numero = parseFloat(prompt(`Insira um número: ${i}`))

    while (isNaN(numero)) { 
        numero = parseFloat(prompt(`Digite o número: ${i}`))    
    
    }
 soma += numero;
}

let average = soma / count; 

console.log(`O maior número é: ${soma}`);
console.log(`A Media é: ${average}`); 

