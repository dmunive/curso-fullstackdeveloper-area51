import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginatorModule, MatPaginator, MatSort } from '@angular/material';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


interface ICurso {
  id: number,
  curso: string,
  profesor: string,
  fecha: Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  apertura: boolean = false

  @ViewChild(MatPaginator) paginador
  @ViewChild(MatSort) ordenamiento

  columnasAMostrar: Array<string> = ['id', 'curso', 'profesor', 'fecha']
  /*columnasAMostrar: Array<string> = ['id', 'curso']
  columnasAMostrar: Array<string> = ['id', 'curso', 'fecha']*/

  datos: Array<ICurso> = [
    { id: 1, curso: "FullStack", profesor: "Juan Carlos", fecha: new Date() },
    { id: 2, curso: "HTML", profesor: "Nuria Fajardo", fecha: new Date() },
    { id: 3, curso: "Photoshop", profesor: "Manuel Torres", fecha: new Date() },
    { id: 4, curso: "Android", profesor: "José García", fecha: new Date() },
    { id: 5, curso: "3D", profesor: "Mario Cabezas", fecha: new Date() }
  ]

  miDataSource: MatTableDataSource<ICurso>

  ngOnInit() {
    this.miDataSource = new MatTableDataSource<ICurso>(this.datos)
  }

  ngAfterViewInit(){
    this.miDataSource.paginator = this.paginador
    this.miDataSource.sort = this.ordenamiento
  }


}
