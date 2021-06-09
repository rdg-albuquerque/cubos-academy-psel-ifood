function solucao(precos) {
    let result = 0
    let menorPerda = 0
    
    for(var i = 0; i < precos.length; i++){
        for(var i2 = i+1; i2 < precos.length; i2++){
            result = precos[i] - precos[i2]
            if (menorPerda == 0 && result > 0){
                menorPerda = result
            } else {
                if (result > 0 && result < menorPerda ){
                   menorPerda = result
            }
        }
    }
}
    console.log(menorPerda)
}