const { sumar } = require('./calculadoraCadena');

test('debería retornar 0 para una cadena vacía', () => {
    expect(sumar("")).toBe(0);
});

test('debería retornar el mismo número si la cadena solo tiene un número', () => {
    expect(sumar("2")).toBe(2);
});