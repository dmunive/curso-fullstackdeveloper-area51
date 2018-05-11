import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { ListadoCursosComponent } from "app/cursos/listado-cursos/listado-cursos.component";
import { EdicionCursosComponent } from "app/cursos/edicion-cursos/edicion-cursos.component";
import { NuevoCursosComponent } from "app/cursos/nuevo-cursos/nuevo-cursos.component";

const rutas: Routes = [
    {
        path: "cursos", children: [
            { path: "", component: ListadoCursosComponent },
            { path: "edicion", component: EdicionCursosComponent },
            { path: "nuevo", component: NuevoCursosComponent }
        ]
    }
]

@NgModule(
    {
        imports: [
            RouterModule.forChild(rutas)
        ]
    }
)
export class CursosRouting {}