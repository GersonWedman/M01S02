// Percorra os números de o a 1000 e exiba no console os números primos e ao final a quantidade de números primos que existem nesse intervalo.
// Realize o commit do exercício resolvido.

var quantidade = 0;

for (var i = 2; i <= 1000; i++) {
  var primo = true;

  for (var j = 2; j < i; j++) {
    if (i % j === 0) {
      primo = false;
    }
  }

  if (primo) {
    quantidade += 1;
    console.log(i);
  }
}
console.log('Quantidade de primos entre 0 e 1000: ' + quantidade);
console.log('Quantidade de primos entre 0 e 1000: ' + quantidade);
