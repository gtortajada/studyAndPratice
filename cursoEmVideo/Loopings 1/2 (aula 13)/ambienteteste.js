// Os três modelos de códigos fazem a mesma coisa, as duas primeiras são corretas, a "do meio" que usa o while é a mais encontrada, e última foi uma forma de mostrar o "jeito braçal" de fazer a mesma coisa que os códigos de cima fazem "usando o cérebro"
// Este é o formato usando o teste lógico no final:

var c = 1
do {
    console.log(`Passo ${c}`)
    c++ // c++ é uma forma melhor de digitar   c = c+1 
} while (c <= 6) 


// Este é o formato com teste lógico no início:
// var c = 1
// while (c <= 6) {
//     console.log(`Passo ${c}`)
//     c++ // c++ é uma forma melhor de digitar   c = c+1 
// }




// Fazendo uma sequência sem usar repetição e de uma forma "errada" visando boas práticas e código limpo:
// console.log('Tudo bem')
// console.log('Tudo bem')
// console.log('Tudo bem')
// console.log('Tudo bem')
// console.log('Tudo bem')
// console.log('Tudo bem') 