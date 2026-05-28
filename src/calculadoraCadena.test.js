const { sumar } = require('./calculadoraCadena');

test('debería retornar 0 para una cadena vacía', () => {
    expect(sumar("")).toBe(0);
});
