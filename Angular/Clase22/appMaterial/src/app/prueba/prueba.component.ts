import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  fechaMaxima: Date

  constructor() { }

  ngOnInit() {
    this.fechaMaxima = new Date()
    this.fechaMaxima.setFullYear(this.fechaMaxima.getFullYear() - 18)

  }

}
