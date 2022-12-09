var idade = prompt('Digite a idade:');

if (idade <= 15 && idade >= 0) alert('Jovem');
else if (idade > 15 && idade <= 64) alert('Adulto');
else if (idade > 64) alert('Idoso');
else {
  alert('valor inválido');
}
