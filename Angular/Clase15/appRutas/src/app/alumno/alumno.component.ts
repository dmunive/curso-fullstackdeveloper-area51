import { Component, OnInit, Input } from '@angular/core';
import { IAlumno } from 'app/i-alumno';
import { AlumnoService } from 'app/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  @Input() alumno: IAlumno

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
  }

  editar(){
    this.alumnoService.editando.emit(this.alumno)
  }

}
