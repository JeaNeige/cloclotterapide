const playButton = document.querySelector(".playButton");
const canvas = document.getElementById('Board');
const ctx = canvas.getContext('2d');

const NB_COL = 12;
const NB_LIG = 20;
const TAILLE_BLOCK = 30;



let ZeroX= 4;
let ZeroY= 0;
let direction= 0; // Normal= 0 ; Down= 1; Left= 2 ; Right= 3
Piece=CreatePiece(ZeroX,ZeroY);


let Board = [...Array(NB_LIG)].map(()=> Array(NB_COL).fill(0));

ctx.canvas.width = NB_COL * TAILLE_BLOCK;
ctx.canvas.heigth = NB_LIG * TAILLE_BLOCK;
ctx.scale(TAILLE_BLOCK,TAILLE_BLOCK);

function CreatePiece(x,y){ //choisi une piece au hasard et la crée
    return new Piece(x,y, Math.floor(Math.random * Layouts.length),Math.floor(Math.random * Colors.length));
}

function drawpiece (){ 
    for(let i=0; i<= 4 ; i++){
            let x= Piece.Layout[i][0] + Piece.x;
            let y= Piece.Layout[i][1] + Piece.y;
            Board[x][y]=1;
            ctx.fillStyle=Piece.Color;
            ctx.fillRect(x*TAILLE_BLOCK,y*TAILLE_BLOCK,TAILLE_BLOCK,TAILLE_BLOCK);
            
        }
    console.log(Piece.Layout.length);
}

function supprpiece (){ //Pareil que drawpiece mais en blanc
    for(let i=0; i<= Piece.Layout.length ; i++){
            let x= Piece.Layout[i][0] + Piece.x;
            let y= Piece.Layout[i][1] + Piece.y;
            Board[x][y]=1;
            ctx.fillStyle="white";
            ctx.fillRect(x*TAILLE_BLOCK,y*TAILLE_BLOCK,TAILLE_BLOCK,TAILLE_BLOCK);
    }
}

document.addEventListener("keydown", keypress);

function keypress (key){ //bouge une piece a droite, gauche ou bas
    switch (key.keyCode){
        case 39: //flèche de droite
            direction=2;
            supprpiece();
            Piece.x++;
            drawpiece();
            break;
        case 37: //flèche de gauche
            direction=3;
            supprpiece();
            Piece.x--;
            drawpiece();
            break;
        case 40: //flèche du bas
            direction=1;
            supprpiece();
            Piece.y++;
            drawpiece();
            break;
        default:
            break;
    }
}

function supprline (lineheight){  //supprime une ligne + fait descendre les autres + ajoute 1 au compteur de lignes 

}

function gameend(){ //regarde si la fin du jeu est atteinte

}

function collision (){ //regarde si une des arretes du bas d'une piece est en contact avec une case remplie du board

}

function tickplay (){ //toutes les fonctions qui s'executent en 1 tick de jeu

}

document.addEventListener('DOMContentLoaded', Setup);

function Setup(){
    canvas.width=NB_COL*TAILLE_BLOCK;
    canvas.heigth=NB_LIG*TAILLE_BLOCK;
    ctx.fillStyle="white";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.strokeStyle="black";
    ctx.strokeRect(0,0, canvas.width, canvas.height);
    drawpiece();
    console.table(Board);
}

function play(){
    
}


playButton.addEventListener("click", play);