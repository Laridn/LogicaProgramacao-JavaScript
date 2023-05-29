function somaMultiplos() {
  var soma = 0;

  for (var i = 1; i < 1000; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      soma += i;
    }
  }

  return soma;
}

var resultado = somaMultiplos();
console.log('A soma dos múltiplos de 5 ou 7 abaixo de 1000 é:', resultado);
