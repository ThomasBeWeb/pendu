var canvas = document.getElementById('mon_canvas');
var context = canvas.getContext('2d');

traceTrait(0,480,498,480);
traceTrait(50,480,50,50);
traceTrait(50,50,320,50);
traceTrait(50,100,100,50);
traceTrait(320,50,320,100);


//Tracé de la tête
context.beginPath(); //On démarre un nouveau tracé.
context.arc(320, 135, 35, 0, Math.PI*2); //On trace la courbe délimitant notre forme
context.stroke();
context.closePath();

//corps
traceTrait(320,170,320,320);

//bras
traceTrait(320,215,250,165);
traceTrait(320,215,390,165);

//jambes
traceTrait(320,320,250,370);
traceTrait(320,320,390,370);

function traceTrait(startX,startY,endX,endY){
    context.beginPath();//On démarre un nouveau tracé
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();//On trace seulement les lignes.
    context.closePath();
}