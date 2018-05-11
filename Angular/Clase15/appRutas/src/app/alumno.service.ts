import { Injectable, EventEmitter } from '@angular/core';
import { IAlumno } from 'app/i-alumno';
import { CursoService } from 'app/curso.service';

@Injectable()
export class AlumnoService {

  private lista: IAlumno[] = []
  private contador: number = 1

  actualizando = new EventEmitter()
  editando = new EventEmitter<IAlumno>()

  constructor(private cursoService: CursoService) { }

  listado(): IAlumno[] {
    this.lista.forEach(item => {
      const curso = this.cursoService.listado().find(cur => cur.idCurso==item.idCurso)

      item.tituloCurso = curso.tituloCurso
    })
    return this.lista.slice()
  }

  insertar(alumno: IAlumno): void {
    alumno.idAlumno = this.contador++
    this.lista.push(alumno)
    this.actualizando.emit()
  }

  eliminar(idAlumno: number): void {
    const posicion = this.lista.findIndex( item => item.idAlumno === idAlumno)
    this.lista.splice(posicion, 1)
    this.actualizando.emit()
  }

  actualizar(alumno: IAlumno): void {
    const posicion = this.lista.findIndex( item => item.idAlumno === alumno.idAlumno)

    this.lista[posicion] = alumno
    this.actualizando.emit()
  }

  detalle(idAlumno: number): void {
    const elemento: IAlumno = Object.assign({}, this.lista.find(item => item.idAlumno === idAlumno))

    this.editando.emit(elemento)
  }

}
