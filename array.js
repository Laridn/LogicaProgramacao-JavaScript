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

var numeros = [5, 9, 2, 1, 7, 4, 15];
var indices = encontrarIndicesMinMax(numeros);
console.log('Índice do maior valor:', indices[0]);
console.log('Índice do menor valor:', indices[1]);
