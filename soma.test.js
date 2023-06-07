const { somaMultiplos } = require('./soma');

test('calcula corretamente a soma dos múltiplos de 5 ou 7 abaixo de 1000', () => {
  const resultado = somaMultiplos();

  expect(resultado).toBe(156361);
});
