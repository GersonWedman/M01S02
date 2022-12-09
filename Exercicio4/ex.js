var num = 0;
var soma = 0;
while (num !== -1) {
  num = window.prompt('Digite um número para somar?');
  num = parseInt(num);
  if (!isNaN(num) && num !== -1) {
    soma += num;
  }
}
window.alert(`${soma}`);
