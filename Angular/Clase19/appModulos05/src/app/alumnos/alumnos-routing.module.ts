import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoAlumnosComponent } from 'app/alumnos/nuevo-alumnos/nuevo-alumnos.component';
import { EdicionAlumnosComponent } from 'app/alumnos/edicion-alumnos/edicion-alumnos.component';
import { ListadoAlumnosComponent } from 'app/alumnos/listado-alumnos/listado-alumnos.component';

const routes: Routes = [
  {
    path: "", children: [
        { path: "", component: ListadoAlumnosComponent },
        { path: "edicion", component: EdicionAlumnosComponent },
        { path: "nuevo", component: NuevoAlumnosComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
