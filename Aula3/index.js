var convidado = 'Thais';
var noivos = 'Joao e Maria';
var dataFormatada = '05/12/2022, às 16 horas';

var texto =
  ' Caro(a) ' +
  convidado +
  '! \n\n Você está convidado(a) para o casamento de ' +
  noivos +
  ', a ser realizado no dia ' +
  dataFormatada +
  '.\n\n Contamos com a sua presença! \n\n Atenciosamente, \n os noivo(a)s!';

var texto2 = `Olá ${convidado};

teste
`;

console.log(texto);
console.log(texto2);

//string
var nome = 'teste';

//number
var idade = 28;
var decimal = 12.6;
var negativo = -3;

//boolean
var verdadeiro = true;
var falso = false;

//null
var nulo = null;
console.log(nulo);

//undefined
var indefinido;
console.log(indefinido);

//agora atribuiu um valor sem declarar var
indefinido = 'agora tem valor';
console.log(indefinido);

//object
var pessoa = {
  nome: 'Gerson',
  idade: 32,
  ativo: true,
  endereco: { rua: 'Avenida bla bla', numero: 123, bairro: ' harmonia' },
};

console.log(pessoa);
console.log(pessoa['idade']);
console.log(pessoa.endereco.numero);

//array

var lista = [1, 2, 'nome', 'sobrenome', 'blabla'];
console.log(lista[4]);
console.log(lista[1]);
console.log(lista[3]);
console.warn('OI');

var nomeee = prompt('Digite o nome: ');
