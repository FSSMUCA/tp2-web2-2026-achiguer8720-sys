let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let v = valeurs[i];

    let valeurString = String(v);

    if (valeurString === "") {
        valeurString = "(chaine vide)";
    }

    let etat = v ? "truthy" : "falsy";

    console.log(valeurString + " -> " + etat);
}

