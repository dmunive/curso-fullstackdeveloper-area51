import { Injectable } from '@angular/core';
import { ICurso } from './i-curso';
import { Observable } from 'rxjs/Observable';
import { apiRest } from 'app/constantes';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CursoService {


	constructor(private http: HttpClient) { }

	listado(): Observable<ICurso[]> {
		return this.http.get<ICurso[]>(`${apiRest}/cursos`)
	}

	insertar(curso: ICurso): Observable<ICurso> {
		return this.http.post<ICurso>(`${apiRest}/cursos`, curso, {
			observe: "body", responseType: "json"
		})
	}

}
