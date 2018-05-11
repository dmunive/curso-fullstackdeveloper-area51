import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive-form',
  templateUrl: './formulario-reactive-form.component.html',
  styleUrls: ['./formulario-reactive-form.component.css']
})
export class FormularioReactiveFormComponent implements OnInit {

  registro: FormGroup

  nombresNoPermitidos: String[] = ["madeinusa", "neurona", "tulablancaluna", "beteta", "amor"]

  constructor() { }

  ngOnInit() {
    this.registro = new FormGroup({
      'nombre': new FormControl(null, [Validators.required, this.validarNombre.bind(this)]),
      'apellido': new FormControl("Hidalgo", Validators.required),
      'correo': new FormControl(null, [Validators.required, Validators.email])
    })

  }

  grabar(){
    console.log(this.registro)
  }

  validarNombre(control: FormControl):{[s: string]: boolean} {
    let texto = null
    if(control.value) texto = control.value.toLowerCase().trim()
    
    if(this.nombresNoPermitidos.indexOf(texto) != -1) {
      return {'nombreInvalido': true}
    }

    return null
  }



}
