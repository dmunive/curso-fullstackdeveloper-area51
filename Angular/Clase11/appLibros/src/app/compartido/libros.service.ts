import { Injectable, EventEmitter } from "@angular/core";
import { Ilibro } from "./ilibro";
import { Icomentario } from "./icomentario";

@Injectable()
export class LibroService {
    private libros: Array<Ilibro> = []

    evento = new EventEmitter()

    listar(): Array<Ilibro> {
        return this.libros
    }

    insertar(libro: Ilibro): void{
        this.libros.push(libro)
        this.evento.emit()
    }

    detalle(pos: number): Ilibro {
        return this.libros[pos]
    }

    insertarComentario(comentario: Icomentario, pos: number): void {
        this.libros[pos].comentarios.push(comentario)
    }
}