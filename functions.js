function calcularMDC(a, b) {
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

module.exports = { calcularMDC };
