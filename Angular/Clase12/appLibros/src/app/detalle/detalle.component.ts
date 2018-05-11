import { Component, OnInit } from '@angular/core';
import { LibroService } from '../compartido/libros.service';
import { Ilibro } from '../compartido/ilibro';
import { Icomentario } from '../compartido/icomentario';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  private libroSeleccionado: Ilibro
  nuevoComentario: string

  constructor(private libroService: LibroService) { }

  ngOnInit() {
    this.libroService.eventoDetalle.subscribe(
      (libro: Ilibro) => {
        this.libroSeleccionado = libro
      }
    )
  }

  agregarComentario(){
    const comentario: Icomentario = {texto: this.nuevoComentario}
    this.libroService.insertarComentario(comentario, this.libroSeleccionado.id)
  }

}
