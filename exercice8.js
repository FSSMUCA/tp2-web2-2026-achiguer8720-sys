let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

// nom
let nomCorrige = nom.trim()
if (nomCorrige === "") {
    nomCorrige = "Inconnu"
}

// age
let ageNombre = parseInt(age)
let ageStatut = (!isNaN(ageNombre) && ageNombre > 0) ? "valide" : "valeur invalide"

// email
let posAt = email.indexOf("@")
let posPoint = email.indexOf(".", posAt)
let emailStatut = (posAt !== -1 && posPoint !== -1) ? "valide" : "invalide : pas de point après @"

// scoreJeu
let scoreNombre = parseInt(scoreJeu)
if (isNaN(scoreNombre)) {
    scoreNombre = 0
}

// estAdmin
let adminBool = (estAdmin === "true")

// derniereConnexion
let derniere = derniereConnexion ?? "Jamais connecté"

// nombreConnexions
let connexions = Number(nombreConnexions)
let texteConnexions = (connexions === 0) ? "Aucune connexion" : connexions

// Rapport
console.log("===== RAPPORT UTILISATEUR =====")
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)')
console.log("age              : " + ageNombre + " (" + ageStatut + ")")
console.log('email            : "' + email + '" (' + emailStatut + ")")
console.log('scoreJeu         : ' + scoreNombre + ' (extrait depuis "' + scoreJeu + '")')
console.log('estAdmin         : ' + adminBool + ' (attention : Boolean("false") = true, conversion manuelle requise)')
console.log('derniereConnexion: "' + derniere + '" (valeur par défaut via ??)')
console.log('nombreConnexions : "' + texteConnexions + '" (0 après conversion)')
console.log("================================")
