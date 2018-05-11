import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  imports: [
    CommonModule,
    NucleoRoutingModule
  ],
  declarations: [HomeComponent, LoginComponent, CabeceraComponent],
  exports: [CabeceraComponent, NucleoRoutingModule]
})
export class NucleoModule { }
