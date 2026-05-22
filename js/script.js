function calcularEnfriamiento() {
    let t0 = parseFloat(document.getElementById('t0').value);
    let ts = parseFloat(document.getElementById('ts').value);
    let k = parseFloat(document.getElementById('k').value);
    let t = parseFloat(document.getElementById('t').value);

    let formula = ts + (t0 - ts) * Math.exp(-k * t);
    let resultadoFinal = Math.round(formula);

    document.getElementById('resultado-calor').innerHTML = "Resultado: " + resultadoFinal + " °C";
}

function calcularFactorial(numero) {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function obtenerCombinaciones(n, r) {
    return calcularFactorial(n) / (calcularFactorial(r) * calcularFactorial(n - r));
}

function calcularCombinaciones() {
    let n1 = parseInt(document.getElementById('n1').value);
    let r1 = parseInt(document.getElementById('r1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let r2 = parseInt(document.getElementById('r2').value);

    if (r1 > n1 || r2 > n2) {
        document.getElementById('resultado-combinaciones').innerHTML = "Error: 'r' no puede ser mayor que 'n'.";
        return;
    }

    let grupo1 = obtenerCombinaciones(n1, r1);
    let grupo2 = obtenerCombinaciones(n2, r2);
    let totalSorteo = grupo1 * grupo2;

    document.getElementById('resultado-combinaciones').innerHTML = "Total combinaciones: " + totalSorteo.toLocaleString();
}