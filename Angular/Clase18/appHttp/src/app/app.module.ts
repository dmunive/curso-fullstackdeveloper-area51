import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { HomeComponent } from './home/home.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { AuthService } from 'app/auth.service';
import { AuthGuard } from 'app/auth.guard';
import { FormularioCursosComponent } from './formulario-cursos/formulario-cursos.component';
import { DetalleCursosComponent } from './detalle-cursos/detalle-cursos.component';
import { AuthorizationGuard } from './authorization.guard';
import { CursoService } from './curso.service';

const rutas: Routes = [
  {path: '', component: LoginComponent, pathMatch: "full"},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'cursos', canActivateChild: [AuthGuard], children: [
	  {path: '', component: ListadoCursosComponent},
	  {path: 'formulario', component: FormularioCursosComponent},
	  {path: 'formulario/:id', component: FormularioCursosComponent, canActivate: [AuthorizationGuard]},
	  {path: 'detalle/:id/:idMateria', component: DetalleCursosComponent}
  ]},
  {path: 'alumnos', component: ListadoAlumnosComponent, canActivate:[AuthGuard, AuthorizationGuard]},
  //{path: '**', component: NoencontradoComponent}
  {path: '**', redirectTo: ''}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoCursosComponent,
    ListadoAlumnosComponent,
    HomeComponent,
    NoencontradoComponent,
    FormularioCursosComponent,
    DetalleCursosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, AuthorizationGuard, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
