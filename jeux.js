function afficher(number) {
    document.getElementById("ecran").value += number;
}

function evaluer() {
    if (document.getElementById("ecran").value == "undifine") {
        document.getElementById("ecran").value = 0;
    } else {
        document.getElementById("ecran").value = eval(document.getElementById("ecran").value);
    }
}

function effacer_tout() {
    document.getElementById("ecran").value = ''
}

function effacer() {
    let valeur = document.getElementById("ecran").value
    valeur = valeur.slice(0, -1);
    document.getElementById("ecran").value = valeur
}