import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input("servers") servidores: Array<{ nombre: string, proveedor: string, ip: string, usuario: string, contrasena: string, sistemaOperativo: string, ftp: string }>

  @Output() onUpdate = new EventEmitter<{ nombre: string, proveedor: string, ip: string, usuario: string, contrasena: string, sistemaOperativo: string, ftp: string }>()

  constructor() { }

  ngOnInit() {
  }

  editar(dato: { nombre: string, proveedor: string, ip: string, usuario: string, contrasena: string, sistemaOperativo: string, ftp: string }) {
    this.onUpdate.emit(dato)
  }

}
