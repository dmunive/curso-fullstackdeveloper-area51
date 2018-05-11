import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MateriasComponent } from './materias/materias.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { MenuMovilComponent } from './menu-movil/menu-movil.component';
import { LoginComponent } from './login/login.component'

const rutas: Routes = [
  {path: "", component: LoginComponent},
  {path: "materias", component: MateriasComponent},
  {path: "cursos", component: CursosComponent},
  {path: "alumnos", component: AlumnosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    CursosComponent,
    AlumnosComponent,
    MenuMovilComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
