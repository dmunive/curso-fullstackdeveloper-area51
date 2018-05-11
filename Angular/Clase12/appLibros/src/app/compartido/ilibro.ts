import { Icomentario } from "./icomentario";

export interface Ilibro {
    id?: number,
    titulo: string,
    descripcion: string,
    autor: string,
    comentarios?: Array<Icomentario>
}
