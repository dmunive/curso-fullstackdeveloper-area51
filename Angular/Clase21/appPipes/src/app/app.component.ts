import { Component } from '@angular/core';

interface pelas {
  titulo: string,
  fecha: Date,
  actor: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  busqueda: string

  peliculas: pelas[] = [
    { titulo: "Pantaleón y las visitadoras", fecha: new Date(5, 3, 2000), actor: "Angie Cepeda" },
    { titulo: "El vengador del futuro", fecha: new Date(6, 8, 1998), actor: "Arnold" },
    { titulo: "Lucy", fecha: new Date(3, 4, 2014), actor: "Johanson" },
    { titulo: "El abogado del diablo", fecha: new Date(4, 5, 2012), actor: "Charlize Theron" }
  ]
}
