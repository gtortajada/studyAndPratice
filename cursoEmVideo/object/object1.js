// let amigo = {
//     nome:'José',
//     sexo:'Masculino',
//     peso:86.1,
//     engordar(p=0){
//         console.log('Engordou')
//         this.peso += p 

//     }
// }

// amigo.engordar(3)
// console.log(`O ${amigo.nome} do sexo ${amigo.sexo} pesa ${amigo.peso}.`)
// _______________________________________

// Ideia: fazer uma lista de nomes que será inserida depois do obj criado e fazer uma função que procure todos os nomes com o sobrenome 'Silva'
// --Conferir para não ter e-mail repetido.

let listaPessoas = {
    'joaosilva@gmail.com': { nome: 'João', sobrenome: 'Silva', idade: 31, sexo: 'masculino' },
    'Pansy13@gmail.com': { nome: 'Maria', sobrenome: 'Souza', idade: 30, sexo: 'feminino' },
    'Johnathan74@yahoo.com': { nome: 'Sonia', sobrenome: 'Doyle', idade: 12, sexo: 'masculino' },
    'Ali_Grimes@gmail.com': { nome: 'Augusto', sobrenome: 'Klyn', idade: 22, sexo: 'masculino' },
    'Whitney_Abernathy@hotmail.com': { nome: 'Sofia', sobrenome: 'Arruda', idade: 24, sexo: 'feminino' },
    'Maud.Schmeler75@hotmail.com': { nome: 'Joana', sobrenome: 'Castro', idade: 55, sexo: 'feminino' },
    'olivia.smith@example.com': { nome: 'Olivia', sobrenome: 'Smith', idade: 45, sexo: 'feminino' },
    'lucas.brown@example.com': { nome: 'Lucas', sobrenome: 'Brown', idade: 28, sexo: 'masculino' },
    'mia.wilson@example.com': { nome: 'Mia', sobrenome: 'Wilson', idade: 39, sexo: 'feminino' },
    'noah.johnson@example.com': { nome: 'Noah', sobrenome: 'Johnson', idade: 19, sexo: 'masculino' },
    'amelia.jones@example.com': { nome: 'Amelia', sobrenome: 'Jones', idade: 34, sexo: 'feminino' },
    'liam.martin@example.com': { nome: 'Liam', sobrenome: 'Martin', idade: 41, sexo: 'masculino' },
    'isabella.lee@example.com': { nome: 'Isabella', sobrenome: 'Lee', idade: 50, sexo: 'feminino' },
    // 'ethan.thomas@example.com': { nome: 'Ethan', sobrenome: 'Thomas', idade: 27, sexo: 'masculino' },
    // 'sophia.moore@example.com': { nome: 'Sophia', sobrenome: 'Moore', idade: 36, sexo: 'feminino' },
    // 'james.jackson@example.com': { nome: 'James', sobrenome: 'Jackson', idade: 48, sexo: 'masculino' },
    // 'ava.white@example.com': { nome: 'Ava', sobrenome: 'White', idade: 25, sexo: 'feminino' },
    // 'logan.harris@example.com': { nome: 'Logan', sobrenome: 'Harris', idade: 33, sexo: 'masculino' },
    // 'ella.young@example.com': { nome: 'Ella', sobrenome: 'Young', idade: 40, sexo: 'feminino' },
    // 'mason.hall@example.com': { nome: 'Mason', sobrenome: 'Hall', idade: 38, sexo: 'masculino' },
    // 'sophia.lee@example.com': { nome: 'Sophia', sobrenome: 'Lee', idade: 42, sexo: 'feminino' },
    // 'lucas.allen@example.com': { nome: 'Lucas', sobrenome: 'Allen', idade: 32, sexo: 'masculino' },
    // 'ava.king@example.com': { nome: 'Ava', sobrenome: 'King', idade: 29, sexo: 'feminino' },
    // 'jackson.miller@example.com': { nome: 'Jackson', sobrenome: 'Miller', idade: 26, sexo: 'masculino' },
    // 'mia.davis@example.com': { nome: 'Mia', sobrenome: 'Davis', idade: 21, sexo: 'feminino' },
    // 'noah.garcia@example.com': { nome: 'Noah', sobrenome: 'Garcia', idade: 52, sexo: 'masculino' },
    // 'amelia.martinez@example.com': { nome: 'Amelia', sobrenome: 'Martinez', idade: 54, sexo: 'feminino' },
    // 'liam.rodriguez@example.com': { nome: 'Liam', sobrenome: 'Rodriguez', idade: 20, sexo: 'masculino' },
    // 'isabella.anderson@example.com': { nome: 'Isabella', sobrenome: 'Anderson', idade: 56, sexo: 'feminino' },
    // 'ethan.morales@example.com': { nome: 'Ethan', sobrenome: 'Morales', idade: 58, sexo: 'masculino' },
    // 'sophia.wright@example.com': { nome: 'Sophia', sobrenome: 'Wright', idade: 60, sexo: 'feminino' },
    // 'james.lopez@example.com': { nome: 'James', sobrenome: 'Lopez', idade: 49, sexo: 'masculino' },
    // 'ava.perry@example.com': { nome: 'Ava', sobrenome: 'Perry', idade: 53, sexo: 'feminino' },
    // 'logan.hughes@example.com': { nome: 'Logan', sobrenome: 'Hughes', idade: 57, sexo: 'masculino' },
    // 'ella.turner@example.com': { nome: 'Ella', sobrenome: 'Turner', idade: 59, sexo: 'feminino' },
    // 'mason.ward@example.com': { nome: 'Mason', sobrenome: 'Ward', idade: 61, sexo: 'masculino' },
    // 'sophia.green@example.com': { nome: 'Sophia', sobrenome: 'Green', idade: 63, sexo: 'feminino' },
    // 'lucas.scott@example.com': { nome: 'Lucas', sobrenome: 'Scott', idade: 64, sexo: 'masculino' },
    // 'ava.adams@example.com': { nome: 'Ava', sobrenome: 'Adams', idade: 65, sexo: 'feminino' },
    // 'jackson.hill@example.com': { nome: 'Jackson', sobrenome: 'Hill', idade: 66, sexo: 'masculino' },
    // 'mia.hernandez@example.com': { nome: 'Mia', sobrenome: 'Hernandez', idade: 67, sexo: 'feminino' },
    // 'noah.hernandez@example.com': { nome: 'Noah', sobrenome: 'Hernandez', idade: 68, sexo: 'masculino' },
    // 'amelia.ramirez@example.com': { nome: 'Amelia', sobrenome: 'Ramirez', idade: 69, sexo: 'feminino' },
    // 'liam.washington@example.com': { nome: 'Liam', sobrenome: 'Washington', idade: 70, sexo: 'masculino' },
    // 'isabella.wood@example.com': { nome: 'Isabella', sobrenome: 'Wood', idade: 51, sexo: 'feminino' },
    // 'ethan.murphy@example.com': { nome: 'Ethan', sobrenome: 'Murphy', idade: 62, sexo: 'masculino' },
    // 'sophia.bailey@example.com': { nome: 'Sophia', sobrenome: 'Bailey', idade: 43, sexo: 'feminino' },
    // 'james.brooks@example.com': { nome: 'James', sobrenome: 'Brooks', idade: 44, sexo: 'masculino' },
    // 'ava.bell@example.com': { nome: 'Ava', sobrenome: 'Bell', idade: 37, sexo: 'feminino' },
    // 'logan.gray@example.com': { nome: 'Logan', sobrenome: 'Gray', idade: 35, sexo: 'masculino' }
};

// let emails = Object.keys(listaPessoas)
// console.log(emails) -- Retorna todos os e-mails.

// console.log(listaPessoas["joaosilva@gmail.com"]) -- Retorna nome, sobrenome, idade e sexo.

let mulher40a50 = Object.values(listaPessoas).filter(pessoa => pessoa.sexo === 'feminino' && pessoa.idade >=40 && pessoa.idade <=50);

console.log(mulher40a50)

