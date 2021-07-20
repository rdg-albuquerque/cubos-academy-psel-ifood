function solucao(letra, palavras) {
    let qtd = 0
    for (i of palavras) {
        if (i[0] != letra) {
            qtd += 1
        }
    }
    console.log(qtd)
}