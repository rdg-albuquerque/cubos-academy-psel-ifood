function solucao(joao, andre) {
    if (joao == 'PEDRA') {
        if (andre == 'TESOURA') {
            console.log("JOAO")
        } else if (andre == 'PAPEL') {
            console.log('ANDRE')
        } else {
            console.log('EMPATE')
        }
    }

    else if (joao == "PAPEL") {
        if (andre == "TESOURA") {
            console.log("ANDRE")
        } else if (andre == "PEDRA") {
            console.log('JOAO')
        } else {
            console.log('EMPATE')
        }
    }
    else if (joao == "TESOURA") {
        if (andre == "PAPEL") {
            console.log("JOAO")
        } else if (andre == "PEDRA") {
            console.log('ANDRE')
        } else {
            console.log('EMPATE')
        }
    }
}