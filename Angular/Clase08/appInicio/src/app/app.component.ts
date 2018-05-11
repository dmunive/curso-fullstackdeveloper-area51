import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = "Proyecto Inicial"
  fecha: Date = new Date()
  desactivado: boolean = true

  // lista: string[] = ['Alumno 1', 'Alumno 2', 'Alumno 3']
  lista: Array<string> = ['Alumno 1', 'Alumno 2', 'Alumno 3']

  nombreAlumno: string = "Sergio"
  apellido: string = ""

  constructor(){
    
    setInterval(() => this.desactivado = !this.desactivado, 2000)
  }

  setearApellido(apeAlumno: string){
    this.apellido = apeAlumno

  }
}
