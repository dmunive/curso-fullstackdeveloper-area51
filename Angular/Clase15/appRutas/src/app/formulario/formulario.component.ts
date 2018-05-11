import { Component, OnInit } from '@angular/core';
import { CursoService } from 'app/curso.service';
import { ICurso } from 'app/i-curso';
import { NgForm } from '@angular/forms'
import { IAlumno } from 'app/i-alumno';
import { AlumnoService } from 'app/alumno.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  private listaCursos: Array<ICurso>

  alumno: IAlumno = {nombreCompleto: "", edad: 0, idCurso: 0 }

  edicion: boolean = false

  constructor(private cursoService: CursoService, private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.listaCursos = this.cursoService.listado()
    this.alumnoService.editando
      .subscribe(
        (alumno: IAlumno) => {
          this.alumno = alumno
          this.edicion = true
        }

      )
  }

  guardar() {
    if(this.edicion) {
      this.alumnoService.actualizar(this.alumno)
    } else {
      this.alumnoService.insertar(this.alumno)
    }
    this.resetear()
  }

  resetear(): void {
    this.alumno = {nombreCompleto: "", edad: 0, idCurso: 0 }  
    this.edicion = false
  }

}
