

import {crearCanva, renderizar} from "./graficos.js";

let x = 20;
let y = 20;
let bx =20;
let by =0;

let canvas = crearCanva();
let ctx = canvas.ctx;



ctx.fillStyle="red";
ctx.fillRect(40,40,20,20);




loop();

function loop(){
    requestAnimationFrame(loop);
    renderizar(canvas);
    ctx.fillStyle="gray";
    ctx.fillRect(x,y,20,20);bx;

    x +=bx;
}

window.addEventListener("keydown", keyHandler, false);
function keyHandler (event){
    switch(event.keyCode){
        case 37:
            console.log("izquierda");
            break;
        case 38:
            console.log("arriba");
            break;
        case 39:
            console.log("derecha");
            break;
        case 40:
            console.log("abajo");
            break;
    }
    
}