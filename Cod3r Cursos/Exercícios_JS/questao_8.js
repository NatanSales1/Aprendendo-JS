/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero)
e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

Exemplos:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/

function multiplicacao(num1, num2) {
  if (num1 < 0 || num2 < 0) return 'Selecione números maiores ou iguais a 0'

  let i,
    result = 0

  for (i = 0; i < num2; i++) {
    result += num1
  }
  return result
}

console.log(multiplicacao(5, 5))
console.log(multiplicacao(0, 7))
console.log(multiplicacao(1, -2))
