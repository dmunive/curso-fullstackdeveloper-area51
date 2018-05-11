import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FormularioFormComponent } from './formulario-form/formulario-form.component';
import { FormularioReactiveFormComponent } from './formulario-reactive-form/formulario-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioFormComponent,
    FormularioReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FormularioReactiveFormComponent]
})
export class AppModule { }
