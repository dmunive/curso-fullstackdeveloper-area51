import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, textoABuscar: string, campos: string[]): any {
    if(!textoABuscar || textoABuscar == "") return value

    const resultados = []

    for(let item of value){
      for(let campo of campos) {
        if(item[campo].toLowerCase().indexOf(textoABuscar.toLowerCase().trim()) >= 0) {
          resultados.push(item)
        }
      }

    }

    return resultados
  }

}
