    let num = document.querySelector('input#txnum')
    let caixa = document.querySelector('select#cxselc')
    let res = document.querySelector('div#res')
    let valores = []

function isNumero(n){
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
} 

function adicionar(){     
    if (isNumero(num.value) && !inLista(num.value, valores)){ 
        valores.push(Number(num.value)) // adcionar um valor convertido em number dendo do vetor "valores"
        let item = document.createElement('option') // cria um elemento chamado "item" com uma tag "option"
        item.text = `valor ${num.value} Adicionado.` // item vai ter um valor "text" string
        caixa.appendChild(item)                      // adciona na variavel caixa o texto de item                              
        res.innerHTML = ''
    } else {                                                
        alert('Valor Inválido ou ja encontrado na Lista!')
    }
    num.value = '' // deixa a caixa vazia apos o click
    num.focus() // Volta o cursor na caixa automaticamente
}            
function limpar(){
    valores = []
    caixa.innerHTML = ''
    res.innerHTML = ''
}

function finalizar(){
    if (valores.length == 0){
    window.alert('[ERRO] Adicione Valores para finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]   
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p> O <strong>Maior</strong> valor encontrado foi ${maior}.</p>`
        res.innerHTML += `<p> O <strong>Menor</strong> valor encontrado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> A <strong>média</strong> dos valores: ${media}.</p>`
    }
}


  