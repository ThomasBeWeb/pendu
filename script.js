function afficheResultat(id,texte){
    
    console.log(texte);

    var div = document.getElementById(id);
    
    for (var i = 0; i < div.children.length; i++) {
        if(div.children[i].tagName === "DIV"){;
            div.children[i].innerHTML = texte;
        }
    }
    
}

//Longueur d'une chaine
function lenght(chaine) {
    var longueur = 0;

    while (true) {
        if (chaine[longueur] !== undefined) {
            longueur++;
        } else {
            break;
        }
    }
    return longueur;
}

//Index de la première occurence d'un caractère dans un message
function getIndex(message,caractere) {
    
    for(i = 0 ; i < lenght(message) ; i++) {
        if(message[i] === caractere){
            return i;
        }
    }
}

//Nombre d'occurence d'un caractère dans un message
function count(message,caractere) {
    
    var compteur = 0;
    
    for(i = 0 ; i < lenght(message) ; i++) {
        if(message[i] === caractere){
            compteur++;
        }
    }
    
    return compteur;
}

//Remplace le caractère from par le caractère to dans la chaine message
function replace(message,from,to) {
    
    chaineReturn = "";
    
    for(i = 0 ; i < lenght(message) ; i++) {
        if(message[i] === from){
           chaineReturn += to;
        }else{
            chaineReturn += message[i];
        }
    }
    
    return chaineReturn;
}

//Compte le nb de mots dans un message
function compteMots(message) {
    
     var compteur = 0;
    
    for(i = 0 ; i < lenght(message) ; i++){

            if(message[i] === " "){
                  compteur++; 
            }
      }
      
      return (compteur+1);
}

//Retourne un tableau 2D: [[index mot,mot]]
function getWords(message) {
    
    var listeMots = [];
    var listeIdx = [];
        
     for(i = 0 ; i < lenght(message) ; i++){
            
            newMot = "";
            
            if((i === 0) || (message[i] !== " ")){
                  
                  listeIdx.push(i);
                  while((message[i] !== " ") && (i < lenght(message))) {
                        newMot += message[i];
                        i++;
                  }
                  
                  listeMots.push(newMot);  
            }
      }
      
      var tableauFinal = [];
      
      for(i = 0 ; i < listeIdx.length ; i++){
          
          var tableauAAjouter = [listeIdx[i],listeMots[i]];
          
          tableauFinal.push(tableauAAjouter);
      }
      
      return tableauFinal;
}

function toUpperCase(char) {
  var tableau =
          [
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
              ["z","Z"]
          ];
  for (var j = 0; j < 2; j++)
  {
      for (var i = 0; i < 26; i++)
      {
          if (char === tableau[i][j])
          {
              return tableau[i][1];
          }
      }
  }
}

function voyelleOrNot(mot){
    
    var tableau = ["a", "e", "i", "o", "u"," y"];
    
    var compteur = 0;
    
    for(var i = 0 ; i < lenght(mot) ; i++){
        
        for(var j = 0 ; j < tableau.length ; j++){
            
            if(mot[i] === tableau[j]){
                compteur++;
            }
        }
    }
    
    return compteur;
}