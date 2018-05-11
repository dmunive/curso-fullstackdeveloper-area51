import { Component } from '@angular/core'

@Component({
    // selector: "appmio",  //Selector de etiqueta
    // selector: ".appmio", // Selector de clase
    selector: "[appmio]",
    templateUrl: "appmio.component.html",
    styleUrls: ["appmio.component.css"]
    /*template: `
        <h1>
            Home: {{titulo}}
        </h1>`,
    styles: [
        `
            h1 {color: red; font-family: Verdana}
        `
    ]*/
})
export class AppMioComponent {
    titulo: String = 'Proyecto Inicial de Angular'
}