/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá,
enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/

function repetir(elemento, numRepeticoes) {
  let i,
    repeticoes = []

  for (i = 0; i < numRepeticoes; i++) {
    repeticoes.push(elemento)
  }
  return repeticoes
}

console.log(repetir('código', 2))
console.log(repetir(7, 3))
