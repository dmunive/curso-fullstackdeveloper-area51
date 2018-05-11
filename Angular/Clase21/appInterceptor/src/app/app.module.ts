import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CursoResolve } from 'app/curso.resolve';
import { CursoComponent } from './curso/curso.component';

import { RouterModule, Routes } from '@angular/router'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from 'app/app.interceptor';

const rutas: Routes = [
  {path: "", component: CursoComponent, resolve: {listado: CursoResolve}}
]

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [
    CursoResolve,
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
