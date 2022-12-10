// Exiba um prompt solicitando a entrada de um número para saber quantos pares e impares existem de 0 até o número digitado.
// Calcule o número de pares e impares e exiba o resultado utilizando um alert.

var operacao = prompt('operação (+, -, *, /)');
var num1 = parseFloat(prompt('Num1'));
var num2 = parseFloat(prompt('Num2'));

switch (operacao) {
  case '+':
    alert(num1 + num2);
    break;
  case '-':
    alert(num1 - num2);
    break;
  case '*':
    alert(num1 * num2);
    break;
  case '/':
    alert(num1 / num2);
    break;
  default:
    alert('Operação Inválida');
}
