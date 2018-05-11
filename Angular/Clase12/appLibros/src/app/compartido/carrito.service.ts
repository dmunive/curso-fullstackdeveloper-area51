import { Injectable } from '@angular/core';
import { Ilibro } from './ilibro';
import { EventEmitter } from '@angular/core';

@Injectable()
export class CarritoService {

  librosCarrito: Array<Ilibro> = []
  evento = new EventEmitter()

  listar(): Array<Ilibro> {
    return this.librosCarrito
  }

  insertar(libro: Ilibro): void {
    this.librosCarrito.push(libro)
    this.evento.emit()
  }

  borrar(pos: number): void {
    this.librosCarrito.slice(pos, pos + 1)
    this.evento.emit()
  }

}
