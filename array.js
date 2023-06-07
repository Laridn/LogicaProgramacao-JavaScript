function encontrarIndicesMinMax(array) {
  var maiorValor = array[0];
  var menorValor = array[0];
  var indiceMaior = 0;
  var indiceMenor = 0;

  for (var i = 1; i < array.length; i++) {
    if (array[i] > maiorValor) {
      maiorValor = array[i];
      indiceMaior = i;
    }
    if (array[i] < menorValor) {
      menorValor = array[i];
      indiceMenor = i;
    }
  }

  return [indiceMaior, indiceMenor];
}

module.exports = { encontrarIndicesMinMax };
