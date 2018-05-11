import { Component } from '@angular/core';
import { Servidor } from './servidor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servidores: Array<Servidor> = []

  servidorAEditar: Servidor

  agregarServidor(dato: Servidor) {
    console.log("Método de app")
    this.servidores.push(dato)
  }

  seleccionar(dato: Servidor){
    this.servidorAEditar = dato
  }

  actualizar(dato: Servidor){
  }

}
