import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router'
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { environment } from "environments/environment";

interface iCurso {
    titulo: string
}

@Injectable()
export class CursoResolve implements Resolve<iCurso[]> {

    constructor(private http: HttpClient){}

    resolve():  Observable<iCurso[]> {
        return this.http.get<iCurso[]>(`${environment.apiRest}/cursos`, {observe: "body", responseType: "json"})
    
    }
}