import { arrayContainsValue, arrayNotContainsValue } from '../src/array';

describe('Pruebas para verificar si un array contiene o no ciertos valores', () => {
  // Prueba 1: Verificar que un array contenga el valor "value1"
  test('El array contiene el valor "value1"', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value1';
    expect(arrayContainsValue(arr, value)).toBe(true);
  });

  // Prueba 2: Verificar que un array contenga el valor "value3"
  test('El array contiene el valor "value3"', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value3';
    expect(arrayContainsValue(arr, value)).toBe(true);
  });

  // Prueba 3: Verificar que un array NO contenga el valor "UNAC"
  test('El array NO contiene el valor "UNAC"', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'UNAC';
    expect(arrayNotContainsValue(arr, value)).toBe(true);
  });
});