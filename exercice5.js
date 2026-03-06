let nombres = [
    0,
    NaN,
    Infinity,
    -Infinity,
    42,
    3.14,
    Number.MAX_SAFE_INTEGER + 1,
    -0
];

for (let i = 0; i < nombres.length; i++) {
    let n = nombres[i];

    if (Number.isNaN(n)) {
        console.log(n + " -> INVALIDE");
    }
    else if (n === Infinity || n === -Infinity) {
        console.log(n + " -> INFINI");
    }
    else if (Object.is(n, -0)) {
        console.log("0 -> ZERO NEGATIF");
    }
    else if (Number.isInteger(n) && Number.isSafeInteger(n)) {
        console.log(n + " -> ENTIER SUR");
    }
    else if (Number.isInteger(n) && !Number.isSafeInteger(n)) {
        console.log(n + " -> ENTIER HORS LIMITES");
    }
    else {
        console.log(n + " -> DECIMAL");
    }
}
