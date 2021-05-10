function checar(){
    var data = new Date() // pega a data do sistema
    var ano = data.getFullYear() // cria variavel ano
    var fano = document.getElementById('txano') // pega por ID oque foi digitado no input
    var res = document.getElementById('msgtexto') // envia a msg na div responsavel pela msg no html
   
    if (fano.value.length == 0 || Number(fano.value) > ano) {

        window.alert('[ERRO] Dados digitados estão Errados!')

    } else {
        
        var fsex = document.getElementsByName('fsexo') // getElementsByname ( para varios elementos)
        var idade = ano - Number(fano.value) // var "ano" - o valor do var "fano"
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '50%'
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10) {
            //criança
            img.setAttribute('src', 'img/homem_crianca.png')
            } else if (idade <= 21) {
            // jovem
            img.setAttribute('src', 'img/homem_jovem.png')
            } else if (idade <= 55) {
            // adulto
            img.setAttribute('src', 'img/homem_adulto.png')
            } else {
            // idoso
            img.setAttribute('src', 'img/homem_idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = ' Mulher'
            if (idade >= 0 && idade <= 10) {
            //criança
            img.setAttribute('src', 'img/mulher_crianca.png')
            } else if (idade <= 21) {
            // jovem
            img.setAttribute('src', 'img/mulher_jovem.png')
            } else if (idade <= 55) {
            // adulto
            img.setAttribute('src', 'img/mulher_adulta.png')
            } else {
            // idoso
            img.setAttribute('src', 'img/mulher_idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} Anos!`
        res.appendChild(img)
    }
}        