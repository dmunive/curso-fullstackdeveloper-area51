import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MatPaginatorIntl } from '@angular/material';
import { PopupComponent } from './popup/popup.component';
import { MatPaginatorIntlCro } from './paginador';


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-PE'},
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro }
  ],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
