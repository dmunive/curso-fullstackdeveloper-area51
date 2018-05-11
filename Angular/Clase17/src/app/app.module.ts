import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { HomeComponent } from './home/home.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { AuthService } from 'app/auth.service';
import { AuthGuard } from 'app/auth.guard';

const rutas: Routes = [
  {path: '', component: LoginComponent, pathMatch: "full"},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'cursos', component: ListadoCursosComponent, canActivate:[AuthGuard]},
  {path: 'alumnos', component: ListadoAlumnosComponent, canActivate:[AuthGuard]},
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
    NoencontradoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
