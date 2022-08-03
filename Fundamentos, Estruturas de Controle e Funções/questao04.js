/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function resultdiv(dividendo, divisor) {
  let resultado = dividendo / divisor
  let resto = dividendo % divisor

  console.log(resultado)
  console.log(resto)
}

resultdiv(10, 5)
