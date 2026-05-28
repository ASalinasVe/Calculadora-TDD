const { sumar } = require('./calculadoraCadena');

test('debería retornar 0 para una cadena vacía', () => {
    expect(sumar("")).toBe(0);
});

test('debería retornar el mismo número si la cadena solo tiene un número', () => {
    expect(sumar("2")).toBe(2);
});

test('debería sumar dos números separados por coma', () => {
    expect(sumar("1,2")).toBe(3);
});