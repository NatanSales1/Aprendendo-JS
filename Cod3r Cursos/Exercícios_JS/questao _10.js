/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o
símbolo "+" na quantidade especificada no parâmetro.

Exemplos:
plus(2) // retornará "++"
plus(4) // retornará "++++"
*/

function plus(quantidade) {
  let i
  resultado = ''

  for (i = 0; i < quantidade; i++) {
    resultado += '+'
  }
  return resultado
}

console.log(plus(2))
console.log(plus(4))
