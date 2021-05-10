var idade = 5

console.log(`Você tem ${idade} Anos.`)

if (idade < 16) { // se a idade for menos que 16 anos não vota

    console.log('Não vota')

} else if (idade < 18 || idade > 65) { // se a idade for menor que 
                                       // 18 OU maior que 65 voto opcional
    console.log('Voto Opcional')
    
} else {                  // se não for nenha opção acima, voto obrigatório

    console.log ('Voto Obrigatório')

}