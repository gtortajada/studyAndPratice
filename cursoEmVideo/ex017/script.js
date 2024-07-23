function tabuada () {
    let input = document.getElementById('input')
    let res = document.getElementById('res')


    if (input.value.length === `""`) {
        window.alert('[ERRO] Insira algum número.')
    } else { 
        res.innerHTML('Calculando <br>')
        let b = Number(input.value)
        if (b <= 100 || b >= -100) {
            let res = `1 x ${b} = b*1`
        
        }

    }


}


// A ideia é: 1 x b = b*, e  assim por diante
// Pensei em fazer estrutura de repetição( se for 1, se não for 'c++', mas acho que será muito trabalhoso.