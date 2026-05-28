function sumar(cadena) {
    if (cadena === "") return 0;
    if (cadena.includes(",")) {
        const numeros = cadena.split(",");
        return parseInt(numeros[0]) + parseInt(numeros[1]);
    }
    return parseInt(cadena);
}

module.exports = { sumar };