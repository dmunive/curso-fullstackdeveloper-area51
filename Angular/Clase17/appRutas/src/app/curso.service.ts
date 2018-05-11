import { Injectable } from '@angular/core';
import { ICurso } from './i-curso';

@Injectable()
export class CursoService {
	private lista: ICurso[] = [
		{ idCurso: 1, titulo: "Aritmética" },
		{ idCurso: 2, titulo: "Geometría" }
	]

	constructor() { }

	listado(): ICurso[] {
		return this.lista
	}

}
