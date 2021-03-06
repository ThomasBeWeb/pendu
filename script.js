//Liste des mots disponibles:
var listeMots = ["tortue","vacances","pouet","cafetiere"]

//Declaration des variables mots
var motATrouver = "";
var motEnCours = "";

//Liste des lettres déjà testées
var listeLettres = [];

//Compteur erreurs
var compteur = 0;

//Variable imput pour activer/desactiver ajout lettre
var inputLettre = document.getElementById("testLettre");
inputLettre.disabled = true;


//Fonction nouveau jeu
function startGame(){

    //Verifie si message fin visible, si oui, le cache
    var messageClassList = document.getElementById("messageEnd").classList;

    if(messageClassList.contains("hidden") === false){
        messageClassList.add("hidden");
    }

    //Activation input lettre
    inputLettre.disabled = false;

    //Affichage potence
    startPicture();

    //Reset des mots et liste
    motATrouver = "";
    motEnCours = "";
    listeLettres = [];
    compteur = 0;

    //Tirage d'un index
    let index = Math.floor(Math.random() * listeMots.length);

    motATrouver = listeMots[index];

    //Remplissage du mot affiché
    for(i = 0 ; i < motATrouver.length ; i++){

        motEnCours += "_";

    }

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
inputLettre.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {

        //Test de la lettre
        testLettre(inputLettre.value);

        //Reset de l'input
        inputLettre.value = "";
    }
});


//Fonction test lettre
function testLettre(lettre){

    //Convertir la lettre si besoin
    var checkedLetter = convertMyChar(lettre);
    console.log(checkedLetter);

    //Verification si lettre déjà testée
    var flag = true;

    for(i = 0 ; i < listeLettres.length ; i++){

        if(listeLettres[i] === checkedLetter){

            alert("Lettre déjà testée, faire un autre choix svp");
            flag = false;
            break;
        }
    }

    //Test lettre dans mot à trouver
    if(flag === true){

        //flag indiquant si nouvelle lettre trouvée, sinon dessiner une partie du corps
        var flag2 = true;

        //NewMot
        var newMot = "";

        for(i = 0 ; i < motATrouver.length ; i++){

            if(motATrouver[i] === checkedLetter){

                //Ajout de la lettre dans mot à afficher              
                newMot += checkedLetter;

                //Changement de flag2
                flag2 = false;

            }else{
                newMot += motEnCours[i];
            }
        }

        motEnCours = newMot;

        //Ajout de la lettre dans la liste des lettres téstées
        listeLettres.push(checkedLetter);

        showWord(motEnCours);

        //Si lettre n'appartient pas au mot: dessiner une partie du corps
        if(flag2 === true){
            compteur++;
            gamePicture(compteur);
        }

        //Check fin de partie
        checkEnd();
        
    }
}


//Fonction verification fin de partie
function checkEnd(){

    var endRow = document.getElementById("messageEnd");

    //Victoire (plus de "_" dans le motEnCours)
    if(motEnCours.indexOf("_") === -1){
        endRow.classList.remove("hidden"); //Affiche div
        endRow.childNodes[1].style.color = "green";
        endRow.childNodes[1].innerHTML = "Sauvé !!!"
        inputLettre.disabled = true; //Desactive
    
    }else if(compteur === 7){ //Defaite, le bonhomme est pendu
        endRow.classList.remove("hidden"); //Affiche div
        endRow.childNodes[1].style.color = "red";
        endRow.childNodes[1].innerHTML = "Pendu !!!"
        inputLettre.disabled = true;
    }

}

//Fonction convertissant majuscules et cractères spéciaux
function convertMyChar(char) {

    var listeChar = [
                ["a","A"],
                ["b","B"],
                ["c","C"],
                ["d","D"],
                ["e","E"],
                ["f","F"],
                ["g","G"],
                ["h","H"],
                ["i","I"],
                ["j","J"],
                ["k","K"],
                ["l","L"],
                ["m","M"],
                ["n","N"],
                ["o","O"],
                ["p","P"],
                ["q","Q"],
                ["r","R"],
                ["s","S"],
                ["t","T"],
                ["u","U"],
                ["v","V"],
                ["w","W"],
                ["x","X"],
                ["y","Y"],
                ["a","à"],
                ["a","ä"],
                ["a","â"],
                ["e","é"],
                ["e","è"],
                ["e","ê"],
                ["e","ë"],
                ["i","ï"],
                ["i","î"],
                ["o","ö"],
                ["o","ô"],
                ["u","ü"],
                ["u","ù"],
                ["u","û"]
            ];

    for (var i = 0; i < listeChar.length; i++){

        if (char === listeChar[i][1]) {
            char = listeChar[i][0];
            break;
        }
    }

    return char;
  }
  
