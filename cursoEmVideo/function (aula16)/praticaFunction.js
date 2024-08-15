// Função 01:
// function parimpar(n) {
//     if (n % 2 == 0) {
//         return 'Par'
//     } else {
//         return 'Ímpar'
//     }
// }

// let res = parimpar(11)
// console.log(res)


// Função 02:
// function soma(n1=0, n2=0) { // Tendo o n1=0, n2=0 se for informado apenas o n1 ou n2 não dará erro, o  outro será assumido como zero
//     return n1 + n2
// }
// console.log(soma(2))


// Função 03: função dentro de uma variável
// let v = function (x1=0, x2=0){
//         return x1*x2
// }
// console.log(v(5,3))


// Função 04: Função fatorial
// function fatorial(n) {
//         let fat = 1
//         for (let c = n; c > 1; c--) {
//                 fat *= c
//         }
//        return fat 
// } 

// console.log(fatorial(5))


// Função 05: Função fatorial - Recursividade
function fatorial(n){
        if ( n == 1){
                return 1
        } else {
                return n * fatorial(n-1)
        }

}
console.log(fatorial(6))