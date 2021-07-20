function solucao(produtos) {
    let total = 0
    let totalTop = 0

    for (i of produtos) {
        total += i.preco
    }
    for (i of produtos) {
        if (i.preco > 10000) {
            totalTop += i.preco
        }
    }
    let percentual = totalTop / total
    let resposta = {
        "totalTop": totalTop,
        "percentual": percentual

    }
    console.log(resposta)
}