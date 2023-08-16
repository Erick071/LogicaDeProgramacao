/*for (i = prompt(); i >= 0; i--){ 
    console.log(i);
}
*/

/*for (x = 0; x <= 20; x += 2) {
    console.log(x)
    if (x % 2 == 0); 

}
*/ 

/*for (x = 1; x <= 10; x++) {
    if (x % 2 === 1 && x % 3 === 0) {
      prompt() += x;
    }
  }
  console.log("A soma dos números ímpares é", x);
  */

  /* for (x = 100; x >= 0; x -= 5) {
    if (x % 2 !== 0)  
    console.log(x)
  }
  */ 

/* let tab = 7

for (i = 1; i <= 10; i++) {
    console.log(tab * i)
}
*/ 
/* let numero = parseInt(prompt("Digite um numero: "))

for(let x = 0; x <= numero; x += 2) { 
    console.log(x); 
}
*/

/*
const numero = (prompt(`Digite um numero: `))
const numero2 = (prompt(`Digite outro numero: `))

if(numero > numero2) { 
for(let x = numero; x <= numero2; x++) {
    console.log(x);
}
 } else { 

for(let x = numero; x <= numero2; x++) {
    console.log(x);

 }
 }
*/

let numero = (prompt(`Digite um numero: `));

let somaimpares = 0

for (let x = 1; x <= numero ; x += 2) {
    somaimpares += x;  
    }

    console.log(`A soma dos impares entre 1 e ${numero} é: ${somaimpares}`)
