import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Servidor } from '../servidor';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent implements OnInit {

  @Input() server: Servidor

  @Output() onEditar = new EventEmitter<Servidor>()

  constructor() { }

  ngOnInit() {
  }

  editar(){
    this.onEditar.emit(this.server)
  }

}
