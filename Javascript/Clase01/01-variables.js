/*
	Tipos de datos

	Primitivas
	- Números: enteros, decimales, hexadecimales, flotantes, reales

	- Textos: cadenas (strings, text, varchar, nvarchar, char)

	- Booleanos: true, false

	- Fecha: date, datetime

	Complejas

	- Lista: arreglos (arrays)

	- Objetos: JSON (JAVSCRIPT OBJECT NOTATION)

*/

// Aquí comenzamos a usar las variables

// Primitivas
var nombre = "Sergio"  // tipo string
var edad = 45   // tipo número o entero o number o integer
var vivo = true  // tipo booleano
var fecha = new Date()  // tipo fecha

// Complejas
var alumnos = ["javier", "luis", 'alberto', "sergio"] // tipo arreglo o lista o array
var datos = [ 40, "zapato", true, false, 34]

var persona =  {nombre: "Sergio", estatura: 179,raza: "mestizo",edad: 45,peso: 67} // tipo json

console.log("Nombre del alumno", nombre, edad)
console.log(edad)
console.log(fecha)
console.log(persona)
console.table(persona)

console.time("proceso")

console.timeEnd("proceso")



















