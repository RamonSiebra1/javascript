function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano' )
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
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
                img.setAttribute('src', 'cm.png')
            } else if(idade < 21) {
                img.setAttribute('src', 'jm.png')
            } else if(idade < 60) {
                img.setAttribute('src', 'am.png')
            } else {
                img.setAttribute('src', 'im.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'cf.png')
            } else if(idade < 21) {
                img.setAttribute('src', 'jf.png')
            } else if(idade < 60) {
                img.setAttribute('src', 'af.png')
            } else {
                img.setAttribute('src', 'if.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}