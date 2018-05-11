import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'app/i-usuario';
import { AuthService } from 'app/auth.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: IUsuario = { correo: '', contrasena: '' }
  invalido: boolean = false
  mensajeError: string

  constructor(private auth: AuthService, private ruta: Router) { }

  ngOnInit() {
  }

  ingresar() {
    this
      .auth
      .login(this.usuario)
      .subscribe(
      (data: IUsuario) => {
        localStorage.setItem("usuarioLogueado", JSON.stringify(data))
        this.auth.cambioEstado.emit(true)
        this.ruta.navigate(["home"])
      },
      (error: any) => {
        this.invalido = true
        this.mensajeError = error.error.error
      }
      )
  }

}
