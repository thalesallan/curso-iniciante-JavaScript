var agora = new Date()

var hora = agora.getHours()

var min = agora.getMinutes()
//var hora = 9
//var min = 55

console.log(`Agora são Exatamente ${hora} Horas e ${min} Min`)

if (hora < 12 && hora >= 6) {

    console.log('Bom Dia!')

} else if (hora >= 12 && hora < 18) {
    
    console.log('Boa Tarde!')

} else if (hora >= 18 && hora < 23) {

    console.log('Boa Noite!')
    
} else {
    console.log('Boa Madrugada!')
}