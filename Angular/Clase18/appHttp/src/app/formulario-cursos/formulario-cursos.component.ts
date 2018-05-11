import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { CursoService } from 'app/curso.service';
import { ICurso } from 'app/i-curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-cursos',
  templateUrl: './formulario-cursos.component.html',
  styleUrls: ['./formulario-cursos.component.css']
})
export class FormularioCursosComponent implements OnInit {
  titulo: string

  constructor(private cursoService: CursoService, private ruteador: Router) { }

  ngOnInit() {
  }

  insertar(){
    const curso: ICurso = {titulo: this.titulo}
    this.cursoService.insertar(curso)
      .subscribe(
        (data: ICurso) => {
          this.ruteador.navigate(["/cursos"])
        }
      )
  }

}
