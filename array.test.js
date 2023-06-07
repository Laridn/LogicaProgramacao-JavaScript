const { encontrarIndicesMinMax } = require('./array');

test('encontra os índices corretos do maior e menor valores', () => {
  const numeros = [5, 9, 2, 1, 7, 4, 15];
  const indices = encontrarIndicesMinMax(numeros);

  expect(indices[0]).toBe(6); // O maior valor é 15 e seu índice é 6
  expect(indices[1]).toBe(3); // O menor valor é 1 e seu índice é 3
});

test('encontra os índices corretos quando o maior e o menor valores são os mesmos', () => {
  const numeros = [5, 9, 2, 1, 7, 4, 15, 1];
  const indices = encontrarIndicesMinMax(numeros);

  expect(indices[0]).toBe(6); // O maior valor é 15 e seu índice é 6
  expect(indices[1]).toBe(3); // O menor valor é 1 e seu índice é 3
});

test('encontra os índices corretos quando o array tem apenas um elemento', () => {
  const numeros = [5];
  const indices = encontrarIndicesMinMax(numeros);

  expect(indices[0]).toBe(0); // O maior valor é 5 e seu índice é 0
  expect(indices[1]).toBe(0); // O menor valor é 5 e seu índice é 0
});
