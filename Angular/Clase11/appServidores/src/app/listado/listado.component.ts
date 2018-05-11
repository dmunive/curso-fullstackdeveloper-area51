import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Servidor } from '../servidor';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input("servers") servidores: Array<Servidor>

  @Output() onUpdate = new EventEmitter<Servidor>()

  constructor() { }

  ngOnInit() {
  }

  editar(dato: Servidor) {
    this.onUpdate.emit(dato)
  }

}
