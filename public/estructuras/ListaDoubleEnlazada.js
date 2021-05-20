
class Nodo{
    constructor(data, next, anterior){
        this.data = data;
        this.next = next;
        this.anterior = anterior;
    }
}

export class ListaDoubleEnlazada{
    constructor(){
        this.cabeza=null;
        this.cola =null;
        this.size=0;
    };

    agregarCabeza(data){
        const nuevoNodo = new Nodo(data, this.cabeza, null);
        if(this.cabeza){
            nuevoNodo.next=this.cabeza;
            this.cabeza.anterior=nuevoNodo
            this.cabeza = nuevoNodo;
        }else{
            this.cabeza =nuevoNodo;
            this.cola = nuevoNodo;
        }
        this.size++;
    }

    agregarCola(data){
        const nuevoNodo = new Nodo(data, null, this.cola);

        if(this.cola){
            nuevoNodo.anterior = this.cola;
            this.cola.next = nuevoNodo;
            this.cola = nuevoNodo;
        }else{
            this.cola = nuevoNodo;
            this.cabeza = nuevoNodo;
        }
        this.size++;
    }

    agregarEspecifico(data, indice){
        if(indice<0||indice>this.size){
            return null;
        }

        const nuevoNodo = new Nodo(data, null, null);

        let actual = this.cabeza;
        let anterior;

        if(indice ===0){
            nuevoNodo.next= actual;
            actual.anterior = nuevoNodo;
            this.cabeza= nuevoNodo;
        }else{
            for(let i=0;i<indice;i++){
                anterior = actual;
                actual = actual.next;
            }
            nuevoNodo.next = actual;
            nuevoNodo.anterior=nuevoNodo;
            actual.anterior = nuevoNodo;
            anterior.next = nuevoNodo;
        }
        this.size++;
    }

    imprimir(){
        let actual = this.cabeza;
        let resultado ='';

        while(actual){
            resultado += actual.data +'<->';
            actual = actual.next;
        }
        return resultado += 'X';
    }


    eliminar(){
        if(!this.cabeza){
            return null;
        }

        const valor = this.cabeza.data;

        if(this.cabeza === this.cola){
            this.cabeza=null;
            this.cola = null;

        }else{
            this.cabeza = this.cabeza.next;
            this.cabeza.anterior = null;
        }
        this.size--;
        return valor;
    }

    eliminarCola(){
        if(!this.cola){
            return null;
        }

        const valor = this.cola.data;
        if(this.cabeza === this.cola){
            this.cabeza=null;
            this.cola = null;

        }else{
            this.cola = this.cola.anterior;
            this.cola.next = null;
        }
        this.size--;
        return valor;

    }

    eliminarEspecifico ( data){
        let actual = this.cabeza;
        let anterior= null;

        while(actual!==null){
            if(actual.data===data){
                if(!anterior){
                   return  this.eliminar();

                }else if(!actual.next){
                   return  this.eliminarCola();
                }else{
                    anterior.next = actual.next;
                    actual.next.anterior = anterior;
                }
                this.size--;
                return actual.data;
            }
            anterior = actual;
            actual = actual.next;

        }
        return null;
    }


    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size===0;
    }
   

}

const l = new ListaDoubleEnlazada();
l.agregarCabeza(1);
l.agregarCabeza(2);
l.agregarCabeza(3);
l.agregarCabeza(4);
l.agregarCabeza(5);
//l.agregarCola(4);
//l.agregarCola(5);
//l.agregarEspecifico(100,3);
l.eliminarEspecifico(3);
console.log('==================');
console.log(l.imprimir());

