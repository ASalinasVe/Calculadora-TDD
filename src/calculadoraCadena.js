function sumar(cadena) {
    if (cadena === "") return 0;

    let secuencia = cadena;
    let delims = [',', '-'];

    if (cadena.startsWith("//[")) {
        const espacioIndex = cadena.indexOf(" ");
        const encabezado = cadena.substring(0, espacioIndex);
        secuencia = cadena.substring(espacioIndex + 1);

        const encontrados = encabezado.match(/\[(.*?)\]/g);
        if (encontrados) {
            encontrados.forEach(d => {
                delims.push(d.slice(1, -1));
            });
        }
    }

    const regexPattern = delims.map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
    const numeros = secuencia.split(new RegExp(regexPattern));

    return numeros.reduce((acc, curr) => {
        const num = parseInt(curr || 0);
        return num > 1000 ? acc : acc + num;
    }, 0);
}

module.exports = { sumar };