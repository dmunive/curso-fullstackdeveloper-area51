import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent implements OnInit {

  @Input() server: { nombre: string, proveedor: string, ip: string, usuario: string, contrasena: string, sistemaOperativo: string, ftp: string }

  @Output() onEditar = new EventEmitter<{ nombre: string, proveedor: string, ip: string, usuario: string, contrasena: string, sistemaOperativo: string, ftp: string }>()

  constructor() { }

  ngOnInit() {
  }

  editar(){
    this.onEditar.emit(this.server)
  }

}
