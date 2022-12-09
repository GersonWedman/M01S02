// Exiba um prompt solicitando a entrada de um número para saber quantos pares e impares existem de 0 até o número digitado.
// Calcule o número de pares e impares e exiba o resultado utilizando um alert.

var num = 0;
num = window.prompt('Digite um número:');
num = parseInt(num);
var par = 0;
var impar = 0;

for (num; num >= 0; num--) {
  if (num % 2 != 0) {
    impar++;
  } else {
    par++;
  }
}

alert('numero de pares é ' + par);
alert('numero de impares é ' + impar);
