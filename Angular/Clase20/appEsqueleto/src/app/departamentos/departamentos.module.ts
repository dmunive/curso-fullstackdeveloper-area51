import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepaComponent } from './depa/depa.component';
import { ListadoDepasComponent } from './listado-depas/listado-depas.component';
import { EdicionDepasComponent } from './edicion-depas/edicion-depas.component';
import { NuevoDepasComponent } from './nuevo-depas/nuevo-depas.component';

@NgModule({
  imports: [
    CommonModule,
    DepartamentosRoutingModule
  ],
  declarations: [DepaComponent, ListadoDepasComponent, EdicionDepasComponent, NuevoDepasComponent]
})
export class DepartamentosModule { }
