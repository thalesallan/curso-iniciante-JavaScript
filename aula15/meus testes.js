let valores = [10, 40, 60, 20, 99, 87]

valores.sort() // organiza os valores na ordem certa

console.log(valores.length) // .length ( quantidade de indices)
console.log(valores) // mostra valores dentro do elemento
console.log(valores[0]) // [] especifica o indice e mostra o valor dele
//console.log(`Nosse vetor é o ${valores}`) // em crase, mostro os valores sem as chaves



console.log(`Nosso vetor é o ${valores}`)


for(let pos in valores){
    console.log(`A posição ${pos}, tem o valor ${valores[pos]}`)
}

