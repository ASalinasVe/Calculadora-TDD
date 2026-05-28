function sumar(cadena) {
    if (cadena === "") return 0;
    const numeros = cadena.split(/,|\-/);
    return numeros.reduce((acc, curr) => acc + parseInt(curr || 0), 0);
}

module.exports = { sumar };