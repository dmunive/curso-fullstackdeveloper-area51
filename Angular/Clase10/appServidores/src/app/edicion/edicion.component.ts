import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  @Input() server: {nombre: string, proveedor:string, ip:string, usuario:string, contrasena: string, sistemaOperativo:string, ftp:string}

  @Output() onServer = new EventEmitter<{nombre: string, proveedor:string, ip:string, usuario:string, contrasena: string, sistemaOperativo:string, ftp:string}>()

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
    this.sistema = this.server.sistemaOperativo
    this.ftp = this.server.ftp
  }

  actualizarServidor(){
    this.onServer.emit({nombre: this.nombre, proveedor: this.proveedor, ip: this.ip, usuario: this.usuario, contrasena: this.contrasena, sistemaOperativo: this.sistema, ftp: this.ftp})

  }

}
