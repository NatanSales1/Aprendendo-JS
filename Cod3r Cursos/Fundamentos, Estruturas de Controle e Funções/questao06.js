/* Elabore duas funções que recebem três parâmetros: capital inicial,
taxa de juros e tempo de aplicação. A primeira função retornará o montante
da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capital, taxaJuros, tAplicacao) {
  let montante = capital + capital * taxaJuros * tAplicacao
  return montante
}

function jurosCompostos(capital, taxaJuros, tAplicacao) {
  let montante = capital * (1 + taxaJuros) ** tAplicacao
  return montante
}

console.log(jurosSimples(1000, 0.2, 4))
console.log(jurosCompostos(1000, 0.2, 4))
