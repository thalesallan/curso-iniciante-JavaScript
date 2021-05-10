function calc() {
    let inicio = document.getElementById('txInicio')
    let fim = document.getElementById('txFim')
    let passo = document.getElementById('txPasso')
    let result = document.getElementById('result')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        alert('[ERRO] Preencha preencha todos os campos')
        result.innerHTML= 'Impossivel contar'
    } else {
        result.innerHTML = 'Contando...'        
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Condiderando Passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
        for(let c = i; c <= f; c += p) {
    
            result.innerHTML += `&#128073 ${c} `
            }
        result.innerHTML += `&#9995`
    } else {
        //contagem regressiva
        for(let c = i; c >= f; c -= p) {
            result.innerHTML += `&#128073 ${c} `
            }
        result.innerHTML += `&#9995`
        }   
    }   
}            
            
                    
  