import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatSidenavModule,
MatToolbarModule,
MatButtonModule,
MatIconModule,
MatListModule,
MatCardModule,
MatFormFieldModule,
MatInputModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }
