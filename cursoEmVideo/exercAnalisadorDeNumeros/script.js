let arr = []

function adicionarValor(num) {
    num = Number(num)
    if (arr.includes(num)) {
        window.alert(`O número ${num} já foi adicionado, insira outro número.`)
        return
    } else {
        arr.push(num);
        console.log(arr)
        let log = window.document.getElementById('log');
        log.innerHTML += `O número ${num} foi adicionado <br>`;
    }
}

function mostrarArray() {
    console.log('Conteúdo do array', arr)
}

function adiciona() {
    let num = document.getElementById('num');

    if (num.value.length == 0 || 1 > num.value || num.value > 100) {
        window.alert('[ERRO] Insira um número válido');
    } else {
        adicionarValor(num.value)
        mostrarArray()
        num.value = '';
        num.focus(); //Volta o cursor para adicionar o próximo número
    }
}

function finalizar() {

    // if(precisa ter número dentro do array, se não mensagem de erro){ 

    // } else { se tiver número dentro do array vai chegar aqui e calcular tudo.
    // }
    // Ao final precisa limpar o 'sistema' (array e <p> do log (número x adicionado)
    //Fazer o cáculo e mostrar: Ao todo são x números, O maior número é x, o menor número é x, A soma dos números é x e A média dos números é x.
    //Após adicionar vários números e ter o resultado (clicando em finalizar) se adicionar mais um número ele reseta as informações do array
}


// Se tentar finalizar sem adicionar números, precisa dar window.alert('[ERRO]').

//let add = window.document.getElementById('add')
//let entrada = window.document.getElementById('entrada')
//let result = window.document.getElementById('result')
