const nombres: string[] = ["Sergio", "Andrea", "Mónica"]

import { saludos, longitud } from './utilitario'
console.log(saludos(nombres))
console.log(longitud(nombres[0]))

import * as metodos from './utilitario'
console.log(metodos.saludos(nombres))
console.log(metodos.longitud(nombres[0]))

import misMetodos = require("./utilitario")
console.log(misMetodos.saludos(nombres))
console.log(misMetodos.longitud(nombres[0]))



// npm i -g ts-node

