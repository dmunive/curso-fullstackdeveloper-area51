import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
 name: "filtro"
})
export class FiltroPipeline implements PipeTransform {
    transform(value: string, maxCaracteres: number, texto:string): string {
        if(value.length >= maxCaracteres) {
            const nuevoTitulo: string = value.substring(0, maxCaracteres) + texto
            return nuevoTitulo
        } else {
            return value
        }
    }
}