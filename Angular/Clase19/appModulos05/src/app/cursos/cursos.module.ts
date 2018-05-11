import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCursosComponent } from 'app/cursos/listado-cursos/listado-cursos.component';
import { NuevoCursosComponent } from 'app/cursos/nuevo-cursos/nuevo-cursos.component';
import { CursoComponent } from 'app/cursos/curso/curso.component';
import { EdicionCursosComponent } from 'app/cursos/edicion-cursos/edicion-cursos.component';
import { CursosRouting } from 'app/cursos/cursos.routing.modules';

@NgModule({
  imports: [
    CommonModule,
    CursosRouting
  ],
  declarations: [
    ListadoCursosComponent,
    EdicionCursosComponent,
    CursoComponent,
    NuevoCursosComponent
  ]
})
export class CursosModule { }
