import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Servidor } from '../servidor';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre: string
  proveedor: string
  ip: string
  usuario: string
  contrasena: string
  sistema: string
  ftp: string

  dato: Servidor

  @Output() onServidor = new EventEmitter<Servidor>()

  constructor() { }

  ngOnInit() {
  }

  agregarServidor(){
    console.log("Método de formulario")

    /*this.dato = {nombre: this.nombre, proveedor: this.proveedor, ip: this.ip, usuario: this.usuario, contrasena: this.contrasena, sistema: this.sistema, ftp: this.ftp}*/

    this.dato = new Servidor(this.nombre, this.proveedor, this.ip, this.usuario,this.contrasena, this.sistema, this.ftp)

    this.onServidor.emit(this.dato)
  }



}
