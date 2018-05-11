import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-detalle-cursos',
	templateUrl: './detalle-cursos.component.html',
	styleUrls: ['./detalle-cursos.component.css']
})
export class DetalleCursosComponent implements OnInit {

	idCurso: number
	idMateria: number

	nombreMateria: string

	fragmentoUrl: string

	constructor(private rutaActiva: ActivatedRoute, private ruteador: Router) { }

	ngOnInit() {
		const id: number = +this.rutaActiva.snapshot.params.id
		this.idCurso = id

		this.idMateria = +this.rutaActiva.snapshot.params.idMateria

		this.nombreMateria = this.rutaActiva.snapshot.queryParams.materia

		this.fragmentoUrl = this.rutaActiva.snapshot.fragment

		this.rutaActiva.params
			.subscribe(
				parametros => {
					this.idCurso = +parametros["id"]
					this.idMateria = +parametros["idMateria"]
				}
			)

		this.rutaActiva.queryParams
			.subscribe(
				queryparametros => {
					this.nombreMateria = queryparametros["materia"]
				}
			)

		this.rutaActiva.fragment
			.subscribe(
				fragmento => this.fragmentoUrl = fragmento
			)

	}

	navegacion(){
		this.ruteador.navigate(
			['/cursos','detalle', 20, 1],
			{
				queryParams: {materia: 'Química'},  
				fragment: "activo"
			}
		)
	}

	edicion() {
		this.ruteador.navigate(
			["./formulario", this.idCurso],
			{
				queryParams: {modo: "admin"},
				preserveQueryParams: true,
				fragment: "edicion"
			}
		)
	}

}
