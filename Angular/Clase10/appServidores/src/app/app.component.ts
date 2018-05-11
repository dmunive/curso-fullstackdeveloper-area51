import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servidores: Array<{ nombre: string, proveedor: string, ip: string, usuario: string, contrasena: string, sistemaOperativo: string, ftp: string }> = []

  servidorAEditar: {nombre: string, proveedor:string, ip:string, usuario:string, contrasena: string, sistemaOperativo:string, ftp:string}


  // servidores: {nombre: string, proveedor: string, ip: string, usuario: string, contrasena: string, sistemaOperativo: string}[]

  agregarServidor(dato: {nombre: string, proveedor:string, ip:string, usuario:string, contrasena: string, sistema:string, ftp:string}) {
    console.log("Método de app")

    this.servidores.push({nombre: dato.nombre, proveedor: dato.proveedor, ip: dato.ip, usuario: dato.usuario, contrasena: dato.contrasena, sistemaOperativo: dato.sistema, ftp: dato.ftp})
  }

  seleccionar(dato: {nombre: string, proveedor:string, ip:string, usuario:string, contrasena: string, sistemaOperativo:string, ftp:string}){

    this.servidorAEditar = dato

  }

  actualizar(dato: {nombre: string, proveedor:string, ip:string, usuario:string, contrasena: string, sistemaOperativo:string, ftp:string} ){
    
  }

}
