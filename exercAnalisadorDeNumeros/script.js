//O objetivo é adicionar o número tanto no quadro de baixo e fazer uma lista, quando em um array não mostrado no html.
function adiciona() {
    let num = document.getElementById('num')

    if (num.value.length == 0 || 1 > num.value || num.value > 100) {
        window.alert('[ERRO] Insira um número válido')
    } else {
        let entrada = window.document.getElementById('entrada')
        let result = window.document.getElementById('result')
        let log = window.document.getElementById('log')
        let add = window.document.getElementById('add')

        log.innerHTML += `O número ${num.value} foi adicionado<br>`


        //Adicionar em array / Adicionar no quadro a baixo
    }


}




//Fazer o cáculo e mostrar: Ao todo são x números, O maior número é x, o menor número é x, A soma dos números é x e A média dos números é x.
//Após adicionar vários números e ter o resultado (clicando em finalizar) se adicionar mais um número ele reseta as informações do array
function finalizar() {

}


// Se tentar adicionar sem colocar números precisa dar window.alert('[ERRO]').
// Se tentar finalizar sem adicionar números, precisa dar window.alert('[ERRO]').