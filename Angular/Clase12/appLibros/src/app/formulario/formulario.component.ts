import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ilibro } from '../compartido/ilibro';
import { LibroService } from '../compartido/libros.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, OnDestroy {
  libro: Ilibro

  titulo: string
  descripcion: string
  autor: string

  constructor(private libroService: LibroService) { }

  ngOnInit() {
    console.log("Formulario inicializado")
  }

  ngOnDestroy() {
    console.log("Formulario destruido")
  }

  agregar() {
    this.libro = {titulo: this.titulo, descripcion: this.descripcion, autor: this.autor}

    this.libroService.insertar(this.libro)
  }

}
