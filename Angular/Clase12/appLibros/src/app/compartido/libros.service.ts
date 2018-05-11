import { Injectable, EventEmitter } from "@angular/core";
import { Ilibro } from "./ilibro";
import { Icomentario } from "./icomentario";

@Injectable()
export class LibroService {
    private libros: Array<Ilibro> = []
    private cuenta: number = 0

    evento = new EventEmitter<number>()
    eventoDetalle = new EventEmitter<Ilibro>()

    listar(): Array<Ilibro> {
        return this.libros.slice()
    }

    insertar(libro: Ilibro): void{
        libro.comentarios = []
        libro.id = ++this.cuenta

        this.libros.push(libro)
        console.table(this.libros)
        this.evento.emit(this.libros.length)
    }

    detalle(pos: number): Ilibro {
        return this.libros[pos]
    }

    libroSeleccionado(libro: Ilibro){
        this.eventoDetalle.emit(libro)
    }

    insertarComentario(comentario: Icomentario, pos: number): void {
        const indice: number = this.libros.findIndex(libro => libro.id === pos)

        if(indice>=0) this.libros[indice].comentarios.push(comentario)
    }
}