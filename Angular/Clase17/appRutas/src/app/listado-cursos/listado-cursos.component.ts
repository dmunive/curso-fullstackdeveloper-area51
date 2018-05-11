import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { ICurso } from '../i-curso';

@Component({
	selector: 'app-listado-cursos',
	templateUrl: './listado-cursos.component.html',
	styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {
	private lista: ICurso[]

	constructor(private cursoService: CursoService) { }

	ngOnInit() {
		this.lista = this.cursoService.listado()
	}

}
