import assert from 'node:assert/strict';

/* eslint-disable no-console */
const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

export {
  somaHorasExtras,
  calculaDescontos,
};
