//filas estructuras de datos

export class Queue{
    constructor(){
        this.items = {};
        this.front = 0;
        this.end=0;
    }
    //agregar
    enqueue(data){
        this.items[this.end]=data;
        this.end++;
    }
    //eliminar
    dequeue(){
        if(this.front ===this.end){
            return null;
        }

        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return data;
    }

    //tamaño
    getSize(){
        return this.end - this.front;
    }
    //vacio
    isEmpty(){
        if(this.getSize ===0){
            return true;
        }else{
            return false;
        }
    }

    peek(){
        if(this.getSize===0){
            return null;
        }else{
            return this.items[this.front];
        }
    }

    imprimir(){
        if(this.getSize===0){
            return null;
        }
        let resultado ='';
        for(let i =this.front;i<this.end;i++){
            resultado +=this.items[i]+" ";
        }
        return resultado;
        
    }
}


