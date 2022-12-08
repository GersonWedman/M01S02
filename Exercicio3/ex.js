var numero = prompt('Digite o número a realizar as multilplicações:');

let i = 0;
for (i = 0; i < 10; i++) {
  var mult = i + 1;
  var display = numero * mult;
  alert(numero + ' x ' + mult + ' = ' + display);
}
