import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface iCurso {
  titulo: string
}

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: iCurso[]

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.data
      .subscribe(
        (datos: any) => this.cursos = datos.listado
      )

  }

}
