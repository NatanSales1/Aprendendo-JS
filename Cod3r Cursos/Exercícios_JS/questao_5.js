/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

Exemplos:
maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)
*/

function maiorOuIgual(num1, num2) {
  if (typeof num1 != typeof num2)
    //verificação do typeof deve vir primeiro
    return false
  else if (num1 >= num2) return true
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, '0'))
console.log(maiorOuIgual(5, 1))
