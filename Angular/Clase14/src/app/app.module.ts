import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivaSimpleDirective } from './directiva-simple.directive';
import { DirectivaInputDirective } from './directiva-input.directive';
import { DirectivaFechaDirective } from './directiva-fecha.directive';
import { ListaUbigeoDirective } from './lista-ubigeo.directive';
import { ServidoresComponent } from './servidores/servidores.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaSimpleDirective,
    DirectivaInputDirective,
    DirectivaFechaDirective,
    ListaUbigeoDirective,
    ServidoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ServidoresComponent]
})
export class AppModule { }
