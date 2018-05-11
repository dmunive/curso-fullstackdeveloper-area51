import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../compartido/libros.service';
import { Ilibro } from '../../compartido/ilibro';

@Component({
  selector: 'app-listado-home',
  templateUrl: './listado-home.component.html',
  styleUrls: ['./listado-home.component.css']
})
export class ListadoHomeComponent implements OnInit {
  libros:Ilibro[]


  constructor(private libroService: LibroService) { }

  ngOnInit() {
    this.libros = this.libroService.listar()

    this.libroService.evento.subscribe(
      ()=>{
        this.libros = this.libroService.listar()
      }
    )

  }

}
