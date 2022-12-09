var inicial = 0;
var raiz = 0;
inicial = window.prompt('Digite o valor inicial:');
inicial = parseInt(inicial);
raiz = window.prompt('Digite a raiz:');
raiz = parseInt(raiz);

alert(inicial);
alert(inicial + raiz);
resultado = inicial + raiz;

for (i = 0; i < 8; i++) {
  resultado += raiz;
  alert(resultado);
}
