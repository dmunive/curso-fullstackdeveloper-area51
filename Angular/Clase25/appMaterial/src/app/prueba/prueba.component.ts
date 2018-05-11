import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  avance: number = 0
  temporizador: number
  fechaMaxima: Date
  fechaMinima: Date

  grupoForm: FormGroup

  constructor(private dialogo: MatDialog) { }

  ngOnInit() {
    this.fechaMaxima = new Date()
    this.fechaMaxima.setFullYear(this.fechaMaxima.getFullYear() - 18 )

    this.fechaMinima = new Date()
    this.fechaMinima.setFullYear(this.fechaMinima.getFullYear() - 60)

    this.temporizador = setInterval(()=>{
      if(this.avance + 15 > 100) {
        this.avance = 100
        clearInterval(this.temporizador)
      } else {
        this.avance += 15
      }
      
    }, 1000)

    this.grupoForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email])
    })

  }

  abrirPopup(){
    let referencia: MatDialogRef<PopupComponent>

    referencia = this.dialogo.open(PopupComponent, {
      data: {titulo: "Edición registro", id: 10},
      width: "400px",
      disableClose: true
    })

    referencia.afterClosed().subscribe(
      (data: boolean) => console.log(data) 
    )
  }

}
