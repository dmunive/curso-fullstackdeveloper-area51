import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  permitir: boolean = true
  arreglo: Array<number> = []
  entrada: number = 20

  constructor(){
    setTimeout(() => {
      this.permitir = false
    }, 3000)
    
  }

  ejecutarClic() {
    this.arreglo.push(  Math.round(Math.random()*10 + 1)   )
    console.log(this.arreglo)
    // console.log("Evento click")
  }

  ejecutarInput(letra: any){
    // console.log(letra)
    console.log(letra.data)
    //console.log(letra["data"])
  }
}
