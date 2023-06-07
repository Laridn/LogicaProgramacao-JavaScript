const { calcularMDC } = require('./functions');

test('calcula corretamente o MDC de dois números', () => {
  const numero1 = 36;
  const numero2 = 48;
  const mdc = calcularMDC(numero1, numero2);

  expect(mdc).toBe(12); // O MDC de 36 e 48 é 12
});

test('retorna o próprio número quando um dos números é zero', () => {
  const numero1 = 36;
  const numero2 = 0;
  const mdc = calcularMDC(numero1, numero2);

  expect(mdc).toBe(36); // O MDC de 36 e 0 é 36
});

test('retorna zero quando ambos os números são zero', () => {
  const numero1 = 0;
  const numero2 = 0;
  const mdc = calcularMDC(numero1, numero2);

  expect(mdc).toBe(0); // O MDC de 0 e 0 é 0
});
