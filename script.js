//Liste des mots à trouver:
var listeMots = ["tortue","vacances","pouet","cafetiere"]

//Mot à trouver
var motATrouver = "";

//Mot affiché
var motEnCours = "";

//Fonction nouveau jeu
function startGame(){

    //Reset des mots
    motATrouver = "";
    motEnCours = "";

    //Tirage d'un index
    let index = Math.floor(Math.random() * listeMots.length);

    motATrouver = listeMots[index];

    //Remplissage du mot affiché
    for(i = 0 ; i < motATrouver.length ; i++){

        motEnCours += "_";

    }

    showWord(motEnCours);

}

//Fonction affichage mot
function showWord(mot){

    //Construction du mot à afficher
    var motToScreen = "";

    for(i = 0 ; i < mot.length ; i++){

        motToScreen += (mot[i] + " ");

    }

    //Ajout du mot
    document.getElementById("motAtrouver").innerHTML = motToScreen;
}

