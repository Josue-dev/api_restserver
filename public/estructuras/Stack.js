

export class Stack{
    constructor(){
        this.items={};
        this.top=0;
    }

    agregar(data){
        this.top++;
        this.items[this.top]=data;
    }

    aliminar(){
        let eliminarData;
        if(this.top){
            eliminarData=this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return eliminarData;
        }
    }

    getSize(){
        return this.top;
    }

    isEmpty(){
        if(!this.getSize()){
            return true;
        }else{
            return false;
        }
    }

    peek(){
        if(this.isEmpty()){
            return true;
        }else{
            return this.items[this.top];
        }
    }

    imprimir(){
        let resultado ='';
        for(let i = this.top; i>0; i--){
            resultado += this.items[i]+' ';
        }
        return resultado;
    }

}
/*
const stak = new Stack();
stak.agregar("platao No.1");
stak.agregar("plato No.2");
stak.agregar("plato No.3");
console.log(stak.aliminar());
console.log(stak.aliminar());
console.log(stak);
*/