
export class Nodo{
    constructor(data,next){
        this.data = data;
        this.next = next;
    }
}

export class listaEnlazada{
    constructor(){
        this.cabeza = null;
        this.size =0;
    }

    agregar(data){
        const nuevoNodo = new Nodo(data, null);
        if(!this.cabeza){
            this.cabeza = nuevoNodo;
        }else{
            let actual = this.cabeza;
            while(actual.next){
                actual = actual.next;
            }
            actual.next=nuevoNodo;
        }
        this.size++;
    }

    agregarEnIndice(data, indice){
        if(indice<0 || indice>this.size){
            return null;
        }
        const nuevoNodo = new Nodo(data);

        let actual = this.cabeza;
        let anterior;

        if(indice ===0){
            nuevoNodo.next = actual;
            this.cabeza = nuevoNodo;
        }else{
            for(let i=0;i<indice;i++){
                anterior = actual;
                actual=actual.next;
            }

            nuevoNodo.next = actual;
            anterior.next = nuevoNodo;
        }
        this.size++;
    }

    imprimir(){

        if(this.size===0){
            return null;
        }
        let actual = this.cabeza;
        let resultado = '';

        while(actual){
            resultado += actual.data += '->';
            actual = actual.next;
        }

        resultado += 'X';
        return resultado;
    }

    eliminarElemento(data){
        let actual = this.cabeza;
        let anterior =null;
        while(actual !=null){
            if(actual.data===data){
                if(!anterior){
                    this.cabeza=actual.next;
                }else{
                    anterior.next = actual.next;
                }
                this.size--;
                return actual.data;
            }
            anterior = actual;
            actual = actual.next;
        }
        return null;
    }

    eliminarIndice(indice){
        if(indice<0||indice>this.size){
            return null;
        }

        let actual = this.cabeza;
        let anterior = null;

        if(indice===0){
            this.cabeza = actual.next;
        }else{
            for(let i=0;i<indice;i++){
                anterior=actual.next;
                actual = actula.next;
            }
            anterior.next = actual.next;
        }
        this.size--;
        return actual.data;
    }

    isEmpty(){
        if(this.size===0){
            return true;
        }else{
            return false;
        }
    }

    getSize(){
        return this.size;
    }


}
/*Eliminar el export para hacer las pruebas de verificacion co Qouka.js */
/*const testNodo = new Nodo("test", null);
const lista = new listaEnlazada()
console.log(lista);
lista.agregar(12);
lista.agregar(99);
lista.agregarEnIndice(10,1);
lista.eliminarElemento(12);
console.log(lista.imprimir());
console.log(lista);*/