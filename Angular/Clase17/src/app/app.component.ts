import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  autenticado: boolean = false

  constructor(private auth: AuthService){}

  ngOnInit(){
    this.auth.cambioEstado
      .subscribe(
        (estado: boolean) => this.autenticado = estado
      )
  }

  logout(){
    this.auth.logout()
  }
}
