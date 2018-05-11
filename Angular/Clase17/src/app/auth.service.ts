import { Injectable } from '@angular/core';
import { IUsuario } from 'app/i-usuario';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {
  private lista: IUsuario[] = [
    { idUsuario: 1, nombre: "Sergio", correo: "shidalgo@correo.com", contrasena: "1234" },
    { idUsuario: 2, nombre: "Iván", correo: "icaceres@correo.com", contrasena: "1234" }
  ]

  cambioEstado = new EventEmitter<boolean>()

  //private usuarioLogueado: boolean = false

  constructor(private ruta: Router) { }

  login(usuario: IUsuario): boolean {
    const encontrado = this.lista.find(persona => {
      return persona.correo.toLowerCase().trim() === usuario.correo.toLowerCase().trim() && persona.contrasena.trim() === usuario.contrasena.trim()
    })

    if (encontrado) {
      localStorage.setItem("usuarioLogueado", encontrado.nombre)
      this.cambioEstado.emit(true)
    }

    return encontrado ? true : false
    // return this.usuarioLogueado
  }

  logout() {
    // this.usuarioLogueado = false
    this.cambioEstado.emit(false)
    localStorage.clear()
    this.ruta.navigate([''])
  }

  estaAutenticado(): boolean {
    // return this.usuarioLogueado
    return localStorage.getItem("usuarioLogueado") ? true : false
  }


}
