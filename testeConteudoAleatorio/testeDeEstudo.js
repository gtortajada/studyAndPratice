// Criar lista e fazer aparecer no terminal name + age+ sex (array)

// let name = ["Gustavo", "Gabriela", "Marcos"]
// let age = [19, 20 , 21]
// let sex = ["Man", "Woman", "Man"]

// // Gustavo, 20, Man
// // console.log(name[0], age[1], sex[2])

// let users = [
//     { id:123, name: 'Gustavo', sex:'Man', age: 25, city:'Maringá'},
//     { id:234, name: 'Rafael', sex:'Man', age: 31, city:'Curitiba'},
//     { id:345, name: 'Isadora', sex:'Woman', age: 25, city:'Marabá'},
// ] 
// let citys = users.map(user => user.city);
// console.log(citys)
// let ages = users.map(user => user.age);
// console.log(ages.length) 

// Resposta do terminal: 
// [ 'Maringá', 'Curitiba', 'Marabá' ]
// [ 25, 31, 25 ]



// let user1 = ["Gustavo", "Man", 20, "Maringá"] // [0]= nam, [1]=sex, [2]=age, [3]=city.
// let user2 = ["Rafael", "Man", 31, "Curitiba"]
// let user3 = ["Isadora", "Woman", 25, "Marabá"]


// console.log(user1[0], user2[0])

// const arr1 = [1,2,3];
// const arr2 = [4,5];
// const arr3 = [...arr1, ...arr2,6]; // Três pontos e nome de outra array inclui o contéudo desta outra array dentro da array que criou

// arr3.push(7) //Adiciona o conteúdo do parênteses (7) ao final do array
// arr3.pop() //Exclui o último elemento do array
// arr3.pop() //Exclui o último elemento do array

// console.log(arr3.length); // O retorno no console é 5, sendo o 7 adicionado no 'push(7)' e o 7 e o 6 excluidos no 'pop()'.


// let arr = [4,2,3]; - Inicializa o array com três elementos
// arr.length = 0; - Define o comprimento do array como 0 (remove tudo dentro do array)
// console.log(arr[0]) - Tenta acessar o primeiro elemento do array, mas o retorno é 'undefined' pq tudo de dentro foi removido.


// let num = -1
// if (num) {
//     console.log('This is a non-zero value');
// } O retorno no console sempre sempre 'This is a...' se let num for um número(mesmo que decimal ou negativo)

function checkValue() {
    if (num === undefined) {
        console.log('A variável é undefined')
    } else if (num === null) {
        console.log('A variável é null')
    } else if(num === 0) {
        console.log('A variável é 0')
    } else {
        console.log('A variável é Non-zero value')
    }
}

let num = 
checkValue(num);