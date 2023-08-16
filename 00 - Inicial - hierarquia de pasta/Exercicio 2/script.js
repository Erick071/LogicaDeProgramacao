function tabuada(operação, valor) 
i = 0
{
    switch (operação) {
        case 'multiplicação':
            console.log(`Tabuada multiplicação: ${valor}`)    
                for (let i = 1; i <= 10; i++) {
                console.log(`${valor} x ${i} = ${valor*i}`) 
            }
            break; 
        case 'adição':
            console.log(`Tabuada da adição: ${valor}`)
                for (let i = 1; i <= 10; i++) { 
                console.log(`${valor} + ${i} = ${valor+i}`)
            }
            break;
        case 'subtração':
            console.log(`Tabuada da subtração: ${valor}`)
                for (let i = 1; i <= 10; i++) {
                    console.log(`${valor} - ${i} = ${valor-i}`)
            }
            break;
        case 'divisão': 
            console.log(`Tabuada de Divisão ${valor}`)
                while (i <= 10) { 
                let result 
                console.log(`${valor} / ${i} = ${result}`)  
                i == 0? result = 'Não é possível dividir' : result = valor/i;  
                } 
            break;    
            }          
        }       
const operação = (prompt("Selecione uma operação:"));
const numero = parseInt(prompt("Selecione um número:")); 

    tabuada(operação, numero); 

