import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'app/i-usuario';
import { AuthService } from 'app/auth.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: IUsuario = { correo: '', contrasena: '' }
  invalido: boolean = false

  constructor(private auth: AuthService, private ruta: Router) { }

  ngOnInit() {
  }

  ingresar() {
    const estado: boolean = this.auth.login(this.usuario)

    this.invalido = !estado

    if(estado) this.ruta.navigate(['home'])
    // this.ruta.navigate(['cursos','edicion', 10]) //   /cursos/edicion/10
  }

}
