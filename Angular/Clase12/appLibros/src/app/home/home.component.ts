import { Component, OnInit } from '@angular/core';
import { LibroService } from '../compartido/libros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  visible: boolean = false

  constructor(private libroService: LibroService) { }

  ngOnInit() {
    this.libroService.evento.subscribe(
      (cantidadLibros: number) => {
        this.visible = cantidadLibros > 0 ? true : false
      }
    )
  }

}
