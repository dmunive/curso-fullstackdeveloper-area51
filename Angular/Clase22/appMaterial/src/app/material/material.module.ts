import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule} from '@angular/material'
import {FlexLayoutModule} from '@angular/flex-layout'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, FlexLayoutModule, MatSidenavModule, MatToolbarModule
  ],
  exports: [MatButtonModule, MatIconModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, FlexLayoutModule, MatSidenavModule, MatToolbarModule],
  declarations: []
})
export class MaterialModule { }
