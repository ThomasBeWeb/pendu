var canvas = document.getElementById('mon_canvas');
var context = canvas.getContext('2d');

function traceTrait(startX,startY,endX,endY){
    context.beginPath();//On démarre un nouveau tracé
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();//On trace seulement les lignes.
    context.closePath();
}

function startPicture(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    traceTrait(0,480,498,480);
    traceTrait(50,480,50,50);
    traceTrait(50,50,320,50);
    traceTrait(50,100,100,50);
    traceTrait(320,50,320,100);
}

function gamePicture(index){

    switch(index){

        case 1:
            //Tracé de la tête
            context.beginPath();
            context.arc(320, 135, 35, 0, Math.PI*2);
            context.stroke();
            context.closePath();
            break;
        
        case 2:
            //corps
            traceTrait(320,170,320,320);
            break;

        case 3:
            //bras gauche
            traceTrait(320,215,250,165);
            break;

        case 4:
            //bras droit
            traceTrait(320,215,390,165);
            break;

        case 5:
            //jambe gauche
            traceTrait(320,320,250,370);
            break;

        case 6:
            //jambe droite
            traceTrait(320,320,390,370);
            break;

        default:
            break;
    }
}