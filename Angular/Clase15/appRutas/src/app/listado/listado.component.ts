import { Component, OnInit } from '@angular/core';
import { IAlumno } from 'app/i-alumno';
import { AlumnoService } from 'app/alumno.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  alumnos: IAlumno[]

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumnos = this.alumnoService.listado()
    this.alumnoService.actualizando
      .subscribe(() => {
        this.alumnos = this.alumnoService.listado()
      })
  }

}
