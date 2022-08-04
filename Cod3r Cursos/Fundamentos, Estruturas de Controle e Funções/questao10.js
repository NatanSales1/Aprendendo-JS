/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3
e retorne true ou false.
*/

function divisorDe3(int) {
  if (int % 3 == 0) {
    return true
  } else {
    return false
  }
}

console.log(divisorDe3(3))
console.log(divisorDe3(12))
console.log(divisorDe3(4))
