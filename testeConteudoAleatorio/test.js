// Criar lista e fazer aparecer no terminal name + age+ sex (array)

// let name = ["Gustavo", "Gabriela", "Marcos"]
// let age = [19, 20 , 21]
// let sex = ["Man", "Woman", "Man"]

// // Gustavo, 20, Man
// // console.log(name[0], age[1], sex[2])

let users = [
    { id:123, name: 'Gustavo', sex:'Man', age: 25, city:'Maringá'},
    { id:234, name: 'Rafael', sex:'Man', age: 31, city:'Curitiba'},
    { id:345, name: 'Isadora', sex:'Woman', age: 25, city:'Marabá'},
] 
let citys = users.map(user => user.city);
console.log(citys)
let ages = users.map(user => user.age);
console.log(ages.length) 

// Resposta do terminal: 
// [ 'Maringá', 'Curitiba', 'Marabá' ]
// [ 25, 31, 25 ]



// let user1 = ["Gustavo", "Man", 20, "Maringá"] // [0]= nam, [1]=sex, [2]=age, [3]=city.
// let user2 = ["Rafael", "Man", 31, "Curitiba"]
// let user3 = ["Isadora", "Woman", 25, "Marabá"]


// console.log(user1[0], user2[0])