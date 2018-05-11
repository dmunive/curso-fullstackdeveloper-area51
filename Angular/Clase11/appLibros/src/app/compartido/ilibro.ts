import { Icomentario } from "./icomentario";

export interface Ilibro {
    titulo: string,
    descripcion: string,
    autor: string,
    comentarios: Array<Icomentario>

}
