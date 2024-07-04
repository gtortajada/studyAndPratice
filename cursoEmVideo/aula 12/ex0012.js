var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var sec = agora.getSeconds()
var dia = agora.getDay()
var mes = agora.getUTCMonth()
var ano = agora.getFullYear()

console.log(`Hoje é dia ${dia} do mês ${mes} do ano ${ano}`)
console.log(`Agora são exatamente ${hora} hora(s), ${min} minutos e ${sec} segundos.`)

if (hora <=5 ) {
    console.log('Boa madrugada!')
} else if (hora >=6 && hora <12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else if (hora <=24) {
    console.log('Boa noite') 
} 

