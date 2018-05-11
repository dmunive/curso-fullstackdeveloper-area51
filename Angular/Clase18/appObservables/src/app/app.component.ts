import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs'
import { Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  miVariable: Observable<number>
  miObservable: Observable<string>


  ngOnInit() {
    /*this.miVariable = Observable.interval(1000)

    this.miVariable.subscribe(
      (numero: number) => console.log(numero)
    )*/

    this.miObservable = Observable.create(
      (observador: Observer<string>) => {

        setTimeout(()=>{
          observador.next("Respuesta de un API REST 01")
        }, 4000)

        setTimeout(()=>{
          observador.next("Respuesta de un API REST 02")
        }, 6000)

        setTimeout(()=>{
          observador.error("Sucedió un error")
        }, 10000)        

        setTimeout(()=>{
          observador.next("Respuesta de un API REST 03")
        }, 12000)    

        setTimeout(()=>{
          observador.complete()
        }, 8000)   

      }
    )

    this.miObservable.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log("Todo se ha completado")
    )


  }
}
