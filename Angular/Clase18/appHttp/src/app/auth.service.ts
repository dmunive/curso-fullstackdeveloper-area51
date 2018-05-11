import { Injectable } from '@angular/core';
import { IUsuario } from 'app/i-usuario';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRest } from './constantes'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private lista: IUsuario[] = [
    { idUsuario: 1, nombre: "Sergio", correo: "shidalgo@correo.com", contrasena: "1234", rol: "admin" },
    { idUsuario: 2, nombre: "Iván", correo: "icaceres@correo.com", contrasena: "1234", rol: "operador" }
  ]

  cambioEstado = new EventEmitter<boolean>()

  //private usuarioLogueado: boolean = false

  constructor(private ruta: Router, private http: HttpClient) { }

  login(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${apiRest}/usuarios/login`, usuario, {
      observe: "body", responseType: "json"
    })
      /*.subscribe(
      (data: IUsuario) => {
        localStorage.setItem("usuarioLogueado", JSON.stringify(data))
        this.cambioEstado.emit(true)
        this.ruta.navigate(["home"])
      },
      (error: any) => console.log(error)
      )*/
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

  obtenerRol(): string {
    const usuarioLogueado: string = localStorage.getItem("usuarioLogueado")

    const comoJson = JSON.parse(usuarioLogueado)

    return comoJson.rol
  }


}
