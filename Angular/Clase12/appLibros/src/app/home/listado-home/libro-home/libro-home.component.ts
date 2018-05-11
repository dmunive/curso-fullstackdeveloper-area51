import { Component, OnInit, Input } from '@angular/core';
import { Ilibro } from '../../../compartido/ilibro';
import { LibroService } from '../../../compartido/libros.service';

@Component({
  selector: 'app-libro-home',
  templateUrl: './libro-home.component.html',
  styleUrls: ['./libro-home.component.css']
})
export class LibroHomeComponent implements OnInit {
  @Input("item") libro: Ilibro
  
  constructor(private libroService: LibroService) { }

  ngOnInit() {
  }

  verDetalle(){
    this.libroService.libroSeleccionado(this.libro)
  }

}
