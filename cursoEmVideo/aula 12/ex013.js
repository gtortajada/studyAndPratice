var agora = new Date()
var diaSem = agora.getDay()

/*
Os dias da semana resgatados do sistema vem em formato de número, para converter temos que usar alguma condição.
A condição multipla (switch) é a mais apropriada para o caso, vou comentar e em seguida fazer em condição composta para praticar mesmo sabendo que não é a forma mais fácil para o caso.
Os números e respectivos dias da semana são:
0 = Domingo
1 = Segunda-feira
2 = Terça-feira
3 = Quarta-feira
4 = Quinta-feira
5 = Sexta-feira
6 = Sábado
*/

// Lógica feita pela condição multipla (forma mais 'aplicável para o caso')

// switch (diaSem) {
//     case 0:
//         console.log('Hoje é Domingo, pé de cachimbo')
//         break
//     case 1:
//         console.log('Semanada começando, hoje é segunda-feira')
//         break
//     case 2:
//         console.log('Semana à todo vapor, hoje é terça-feira')
//         break
//     case 3:
//         console.log('Quase meio da semana, hoje é quarta-feira')
//         break
//     case 4:
//         console.log('Motivação, ainda tem dois dias para produzir, hoje é quinta-feira')
//         break
//     case 5:
//         console.log('Hoje é sexta-feira, não esqueça que ainda é dia de produzir')
//         break
//     case 6:
//         console.log('Hoje é sábado, dia de aproveitar a vida')
//         break
//     default:
//         console.log('[ERRO] Dia inválido')
//         break //este break é opcional por não ter mais nada a fazer caso ele não seja verdade
// }

// A lógica a baixo foi feita com propósito de prática de condições compostas:

if (diaSem == 0) {
    console.log('Hoje é Domingo!')
} else if (diaSem == 1) {
    console.log('Hoje é Segunda-feira')
} else if (diaSem == 2) {
    console.log('Hoje é Terça-feira')
} else if (diaSem == 3) {
    console.log('Hoje é Quarta-feira')
} else if (diaSem == 4) {
    console.log('Hoje é Quinta-feira')
} else if (diaSem == 5) {
    console.log('Hoje é Sexta-feira')
} else if (diaSem == 6) {
    console.log('Hoje é Sábado')
}