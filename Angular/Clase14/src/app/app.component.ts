import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  miColor: string = "orange"
  listaDistritos: Array<string> = ["Lima", "Pueblo Libre", "Jesus Maria", "Lince"]
}
