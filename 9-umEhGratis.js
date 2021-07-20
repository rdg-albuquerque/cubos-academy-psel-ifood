function solucao(precos) {
  let menorN = precos[1]

  for (i = 0; i < precos.length; i++) {
    if (precos[i] < menorN) {
      menorN = precos[i]
    }
  }

  let total = 0

  for (i of precos) {
    total += i
  }

  if (precos.length >= 5) {
    console.log(total - menorN)
  } else {
    console.log(total)
  }
}