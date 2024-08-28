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

function adiciona() {
    let num = document.getElementById('num');
    let limparresult = () => {
        let resultDiv = document.getElementById('result')
        resultDiv.innerHTML = '';
    }

    if (num.value.length == 0 || 1 > num.value || num.value > 100) {
        window.alert('[ERRO] Insira um número válido');
    } else {
        limparresult()
        adicionarValor(num.value);
        num.value = '';
        num.focus(); //Volta o cursor para adicionar o próximo número
    }
}

function finalizar() {
    let result = document.getElementById('result')


    if (arr.length == 0) {
        window.alert('[ERRO] Nenhum número foi adicinoado!')
    } else {
        result.innerHTML = `Ao todo, temos ${arr.length} números adicionados.<br>`
        let max = Math.max(...arr);
        result.innerHTML += `O maior valor informado foi ${max}.<br>`
        let min = Math.min(...arr);
        result.innerHTML += `O menor valor informado foi ${min}.<br>`
        let soma = arr.reduce((acc, curr) => acc + curr, 0);
        result.innerHTML += `A soma dos números é ${soma}.<br>`
        let media = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
        result.innerHTML += `A média dos números é ${media}.<br>`
    }
}