var nota1 = 5;
var nota2 = 7;
var nota3 = 6;

var media = (nota1 + nota2 + nota3) / 3;

if (media > 7) {
  console.log('Superou a média');
} else {
  console.log('Não atingiu a média!');
}

var isAutenticado = true;
if (!isAutenticado) {
  console.log('Não está autenticado');
} else {
  console.log('Autenticado');
}

var produto = 'Copo';
switch (produto) {
  case 'Copo':
  case 'caneca':
    {
      console.log('5,00');
    }
    break;
  case 'Caneta':
    console.log('1,50');
    break;
  default:
    console.log('Produto não encontrado');
}

var teste = null;
if (teste === null) {
  console.log('é nulo');
}
