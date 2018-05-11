import { Injectable } from '@angular/core';
import { ICurso } from 'app/i-curso';

@Injectable()
export class CursoService {
  private lista: Array<ICurso> = [
    { idCurso: 1, tituloCurso: "NodeJS" },
    { idCurso: 2, tituloCurso: "Angular5" },
    { idCurso: 3, tituloCurso: "ES2015" }
  ]

  constructor() { }

  listado(): Array<ICurso> {
    return this.lista.sort( (cursoA: ICurso, cursoB: ICurso) => {
      if(cursoA.tituloCurso.toLowerCase() > cursoB.tituloCurso.toLowerCase()) {
        return 1
      } else  {
        return -1
      }
    })
  }



}
