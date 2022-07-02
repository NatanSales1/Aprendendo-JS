/*Desenvlova uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
no mês e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X
é o quanto o funcionário ganhou no mês.

Exemplo:
console.log(salarioFuncionario(150, 40.5))
*/

function salarioFuncionario(qntHorasMes, reaisHora) {
  const salario = qntHorasMes * reaisHora
  return 'Salário igual a R$' + salario
}

console.log(salarioFuncionario(150, 40.5))
