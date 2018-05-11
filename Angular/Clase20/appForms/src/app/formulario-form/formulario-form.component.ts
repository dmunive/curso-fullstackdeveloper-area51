import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-form',
  templateUrl: './formulario-form.component.html',
  styleUrls: ['./formulario-form.component.css']
})
export class FormularioFormComponent implements OnInit {
  @ViewChild("f") registro: NgForm

  constructor() { }

  ngOnInit() {
  }

  grabar() {
    if(this.registro.valid) {
      console.log(this.registro.value.datosUsuario.apellido)
      // servicio.insertar(this.registro.value)
      // Aquí se hace el resto de la programación
    }
    console.log(this.registro)
  }

  crearNombre(){
    /*this.registro.setValue({
      correo: "",
      descripcion: "",
      datosUsuario: {
        nombre: "Sergio",
        apellido: ""
      }
    })*/
    this.registro.form.patchValue({
      datosUsuario: {
        nombre: "Sergio"
      }
    })
  }

}
