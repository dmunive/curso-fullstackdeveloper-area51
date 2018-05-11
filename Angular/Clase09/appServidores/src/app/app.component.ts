import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servidores: Array<{ nombre: string, proveedor: string, ip: string, usuario: string, contrasena: string, sistemaOperativo: string }> = []

  // servidores: {nombre: string, proveedor: string, ip: string, usuario: string, contrasena: string, sistemaOperativo: string}[]

  agregarServidor(nombre: string, proveedor: string, ip: string, usuario: string, contrasena: string, sistema: string) {
    this.servidores.push({nombre: nombre, proveedor: proveedor, ip: ip, usuario: usuario, contrasena: contrasena, sistemaOperativo: sistema})
  }
}
