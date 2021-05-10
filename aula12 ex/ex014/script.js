function loading() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date() 
    var hora =  data.getHours()
    var min = data.getMinutes()
    //var hora = 22
    //var min = 30
    msg.innerHTML = `Agora são exatamente ${hora} Horas e ${min} Min.`
    if (hora >= 0 && hora < 12) {
        //manhã
       img.src='manha.png';
       document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <= 18) {
        //tarde
        img.src='tarde.png';
        document.body.style.background = '#b9846f'

    } else {
        //noite
        img.src='noite.png';
        document.body.style.background = '#515154'
    }
}