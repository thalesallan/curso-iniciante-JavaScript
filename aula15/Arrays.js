/* 
//primeira forma
let num = [5, 9, 2, 7, 1]
num[5] = 4
console.log(`O vetor tem ${num.length} posições`)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`Os valores organizados são assim ${num}`)

//segunda forma ( com estrutura de repetição [for])
let num = [1, 5, 2, 4, 9, 8]
for(let pos = 0; pos < num.length; pos++){
    console.log(`O indide ${pos} tem o valor ${num[pos]}`)
}

// terceira forma (com estrutura de repetição [for compacta])
let num = [1, 5, 2, 4, 9, 8]
for(let pos in num){
    console.log(`O indice ${pos} tem o valor ${num[pos]}`)
*/
let num = [1, 5, 2, 4, 9, 8] 

console.log(`Aqui estão os valores sem arrumar ${num}`)
    num.sort()

console.log(`Aqui estão os valores Arrumados${num}`)    

   let pos = num.indexOf(4) 

   if (pos == -1){
       console.log('Valor não encontrado!')
   } else {
        for (pos = 0; pos <= num[pos]; pos++){
            console.log(`O valor ${num[pos]} esta na posição ${pos}`)
        }
   }
   
   
   //console.log(num[1])
   //console.log(num[0])
