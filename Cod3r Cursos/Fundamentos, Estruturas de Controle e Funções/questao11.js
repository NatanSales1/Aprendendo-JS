/*As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto,
imprimindo no console a mensagem e retornando true ou false.
*/

function anoBissexto(year) {
  if (year <= 0) {
    console.log('Ano não bissexto.')
    return false
  } else if (year % 400 == 0) {
    console.log('Ano bissexto.')
    return true
  } else if (year % 100 == 0) {
    console.log('Ano não bissexto.')
    return false
  } else if (year % 4 == 0) {
    console.log('Ano bissexto.')
    return true
  } else {
    console.log('Ano não bissexto.')
    return false
  }
}

console.log(anoBissexto(0))
console.log(anoBissexto(400))
console.log(anoBissexto(2002))
console.log(anoBissexto(2024))
