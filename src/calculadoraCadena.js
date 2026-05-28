function sumar(cadena) {
    if (cadena === "") return 0;
    const numeros = cadena.split(/,|\-/);
    return numeros.reduce((acc, curr) => {
        const num = parseInt(curr || 0);
        return num > 1000 ? acc : acc + num;
    }, 0);
}

module.exports = { sumar };