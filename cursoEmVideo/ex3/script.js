function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotocriancahomem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotojovemhomem.png')
            } else if (idade < 50 ) {
                //Adulto
                img.setAttribute('src', 'fotoadultohomem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotohomemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotocriancamulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotojovemmulher.png')
            } else if (idade < 50 ) {
                //Adulto
                img.setAttribute('src', 'fotoadultomulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotomulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
