//Liste des mots disponibles:
var listeMots = ["tortue","vacances","pouet","cafetiere"]

//Declaration des variables mots
var motATrouver = "";
var motEnCours = "";

//Liste des lettres déjà testées
var listeLettres = [];


//Fonction nouveau jeu
function startGame(){

    //Reset des mots et liste
    motATrouver = "";
    motEnCours = "";
    listeLettres = [];

    //Tirage d'un index
    let index = Math.floor(Math.random() * listeMots.length);

    motATrouver = listeMots[index];

    //Remplissage du mot affiché
    for(i = 0 ; i < motATrouver.length ; i++){

        motEnCours += "_";

    }

    console.log(motATrouver);

    showWord(motEnCours);

}


//Fonction affichage mot et liste des lettres utilisées
function showWord(mot){

    //Construction du mot à afficher
    var motToScreen = "";

    for(i = 0 ; i < mot.length ; i++){

        motToScreen += (mot[i] + " ");

    }

    //Ajout du mot
    document.getElementById("motAtrouver").innerHTML = motToScreen;

    //Affichage des lettres de la liste
    motToScreen = "";

    for(i = 0 ; i < listeLettres.length ; i++){

        motToScreen += (listeLettres[i] + ", ");

    }

    document.getElementById("lettresPasOk").innerHTML = motToScreen;
}


//Touche entrée dans champ text
var textInput = document.getElementById("testLettre")

textInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {

        //Test de la lettre
        testLettre(textInput.value);

        //Reset de l'input
        textInput.value = "";
    }
});


//Fonction test lettre
function testLettre(lettre){

    //Verification si lettre déjà testée

    var flag = true;

    for(i = 0 ; i < listeLettres.length ; i++){

        if(listeLettres[i] === lettre){

            alert("Lettre déjà testée, faire un autre choix svp");
            flag = false;
            break;
        }
    }

    //Test lettre dans mot à trouver
    if(flag === true){

        //NewMot

        var newMot = "";

        for(i = 0 ; i < motATrouver.length ; i++){

            if(motATrouver[i] === lettre){

                //Ajout de la lettre dans mot à afficher              
                newMot += lettre;

            }else{
                newMot += motEnCours[i];
            }
        }

        motEnCours = newMot;

        //Ajout de la lettre dans la liste des lettres téstées
        listeLettres.push(textInput.value);

        showWord(motEnCours);
    }
}


//Fonction affichage
