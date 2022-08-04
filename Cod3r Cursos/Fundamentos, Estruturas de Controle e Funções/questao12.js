/* Faça um algoritmo que calcule o fatorial de um número.*/

function fatorial(num) {
  let i
  let numFatorial = 1

  for (i = 1; i <= num; i++) {
    numFatorial = numFatorial * i
  }
  return numFatorial
}

console.log(fatorial(5))
console.log(fatorial(2))
