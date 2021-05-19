

import {crearCanva, renderizar} from "./graficos.js";


let canvas = crearCanva();
let ctx = canvas.ctx;
let x = 20;
let y = 20;
let vx =20;
let vy =0;

let fps = 15,
    start = 0,
    frameDuration = 3000/fps;




ctx.fillStyle="red";
ctx.fillRect(40,40,20,20);




loop();

function loop(timestamp){
    requestAnimationFrame(loop);
    if(timestamp>=start){
        renderizar(canvas);
        ctx.fillStyle="gray";
        ctx.fillRect(x,y,20,20);
    
        x +=vx;
        y +=vy;
        start=timestamp +frameDuration;
    }
  
}

window.addEventListener("keydown", keyHandler, false);
function keyHandler (event){
    switch(event.keyCode){
        case 37:
            vx = -20;
            vy = 0;
            break;
        case 38:
            vy = -20;
            vx = 0;

            break;
        case 39:
            vx=20;
            vy=0;
            break;
        case 40:
            vy=20;
            vx=0;
            break;
    }
    
}