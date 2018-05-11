import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ListadoAlumnosComponent } from 'app/alumnos/listado-alumnos/listado-alumnos.component';
import { NuevoAlumnosComponent } from 'app/alumnos/nuevo-alumnos/nuevo-alumnos.component';
import { AlumnoComponent } from 'app/alumnos/alumno/alumno.component';
import { EdicionAlumnosComponent } from 'app/alumnos/edicion-alumnos/edicion-alumnos.component';

@NgModule({
  imports: [
    CommonModule,
    AlumnosRoutingModule
  ],
  declarations: [
    ListadoAlumnosComponent,
    EdicionAlumnosComponent,
    AlumnoComponent,
    NuevoAlumnosComponent
  ]
})
export class AlumnosModule { }
