import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AlumnoService } from 'app/alumno.service';
import { CursoService } from 'app/curso.service';
import { DirectivaNumberDirective } from './directiva-number.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    AlumnoComponent,
    FormularioComponent,
    DirectivaNumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AlumnoService, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
