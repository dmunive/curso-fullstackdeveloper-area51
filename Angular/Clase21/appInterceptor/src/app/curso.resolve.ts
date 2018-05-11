import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router'
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { environment } from "environments/environment";
import { HttpHeaders } from "@angular/common/http";

interface iCurso {
    titulo: string
}

@Injectable()
export class CursoResolve implements Resolve<iCurso[]> {

    constructor(private http: HttpClient){}

    resolve():  Observable<iCurso[]> {

        //const headers: HttpHeaders = new HttpHeaders({"Authorization": "Bearer 775kdkaj489lkjhaefak.393"})

        return this.http.get<iCurso[]>(`${environment.apiRest}/cursos`, {observe: "body", responseType: "json"})
    
    }
}