import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { ICurso } from '../i-curso';
import { Router } from '@angular/router';


@Component({
	selector: 'app-listado-cursos',
	templateUrl: './listado-cursos.component.html',
	styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {
	private lista: ICurso[]


	constructor(private cursoService: CursoService, private ruteador: Router) { }

	ngOnInit() {
		this.listar()
	}

	listar(){
		this.cursoService.listado()
		.subscribe(
			(data: ICurso[]) => this.lista = data,
			(error: any) => console.log(error)
		)
	}

	mostrarFormulario(){
		this.ruteador.navigate(["/cursos", "formulario"])
	}

}
