const { sumar } = require('./stringCalculator');

test('debería retornar 0 para una cadena vacía', () => {
    expect(sumar("")).toBe(0);
});