import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Servidor } from '../servidor';


@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  @Input() server: Servidor

  @Output() onServer = new EventEmitter<Servidor>()

  nombre: string
  proveedor: string
  ip: string
  usuario: string
  contrasena: string
  sistema: string
  ftp: string

  constructor() { }

  ngOnInit() {
    this.nombre = this.server.nombre
    this.proveedor = this.server.proveedor
    this.ip = this.server.ip
    this.usuario = this.server.usuario
    this.contrasena = this.server.contrasena
    this.sistema = this.server.sistema
    this.ftp = this.server.ftp
  }

  actualizarServidor(){
    //this.onServer.emit(new Servidor(this.nombre, this.proveedor, this.ip, this.usuario, this.contrasena, this.sistema, this.ftp))

    const datoServidor: Servidor = new Servidor(this.nombre, this.proveedor, this.ip, this.usuario, this.contrasena, this.sistema, this.ftp)

    this.onServer.emit(datoServidor)

  }

}
