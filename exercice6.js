let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let defaut = "valeur par défaut";

let variables = [
    ["nom", nom],
    ["age", age],
    ["ville", ville],
    ["score", score],
    ["actif", actif]
];

console.log("Partie A — opérateur ??");
for (let i = 0; i < variables.length; i++) {
    let nomVar = variables[i][0];
    let valeur = variables[i][1];

    console.log(nomVar + " ?? \"valeur par défaut\" -> " + (valeur ?? defaut));
}

console.log("\nPartie B — opérateur ||");
for (let i = 0; i < variables.length; i++) {
    let nomVar = variables[i][0];
    let valeur = variables[i][1];

    console.log(nomVar + " || \"valeur par défaut\" -> " + (valeur || defaut));
}

console.log("\nPartie C — comparaison");
for (let i = 0; i < variables.length; i++) {
    let nomVar = variables[i][0];
    let valeur = variables[i][1];

    let r1 = valeur ?? defaut;
    let r2 = valeur || defaut;

    if (r1 === r2) {
        console.log(nomVar + " : ?? et || -> même résultat");
    } else {
        console.log(nomVar + " : ?? et || -> résultat différent");
    }
}
