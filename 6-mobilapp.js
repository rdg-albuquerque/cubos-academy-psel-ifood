function solucao(tempo, distancia) {
    if (tempo < 5) {
        console.log("600")
    } else if (tempo > 5 && tempo < 60) {
        console.log((100 * tempo) + (50 * distancia))
    } else {
        if (distancia < 100) {
            console.log(distancia * 200)
        } else {
            console.log(distancia * 150)
        }
    }
}