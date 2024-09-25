function pertenceOuNao(num) {
    if (num === 0 || num === 1) return true;

    let a = 0, b = 1, temp;

    while (b <= num) {
        if (b === num) return true;
        temp = b;
        b = a + b;
        a = temp;
    }
    return false;
}

let numerosParaTestar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numerosParaTestar.forEach(num => {
    console.log(`O número ${num} pertence à sequência de Fibonacci? ${pertenceOuNao(num)}`)
})

// 2)https://github.com/the-almeida/ideaxchange.git