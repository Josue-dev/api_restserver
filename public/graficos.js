
export function crearCanva(
    width = 400, height = 400,
    border="1px dashed black",
    backgroundcolor="white"
){
    //crear canva 
    let canvas = document.createElement("canvas");
    canvas.width=width;
    canvas.height=height;
    canvas.style.border=border;
    canvas.style.background=backgroundcolor;
    document.body.appendChild(canvas);

    canvas.ctx = canvas.getContext("2d");

    return canvas;
}

export function renderizar(canvas){
    let ctx = canvas.ctx;

    ctx.lineWidth = 1;
    ctx.strokstyle = "blue";

    let ax=0;
    let ay=0;
    let bx=0;
    let by =400;

    //vertical
    ctx.beginPath();

    for(let i =20; i<400;i+=20){
        ax=i;
        bx=i;
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx,by);
        
    }
    ctx.stroke();

    //horizontal
    ax=0;
    bx=400;
    ctx.beginPath();
    for(let i =20; i<400;i+=20){
        ay=i;
        by=i;
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx,by);
        
    }
    ctx.stroke();
}