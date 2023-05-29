function calcularMDC(a, b) {
  // Verificar se algum dos números é igual a zero
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }

  var maiorDivisorComum = 1;

  for (var i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      maiorDivisorComum = i;
    }
  }

  return maiorDivisorComum;
}

var numero1 = 36;
var numero2 = 48;
var mdc = calcularMDC(numero1, numero2);
console.log('O MDC de', numero1, 'e', numero2, 'é', mdc);
