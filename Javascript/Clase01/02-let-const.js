var nombre = "Sergio"
nombre = "Javier"
console.log(nombre)

if (true) {
	let apellido = "Hidalgo"  // La variable existe solo en el ámbito del condicional
	apellido = "Sanmartin"
	console.log(apellido)
}

const edad = 45  // El tipo de dato es constante
edad = 60		// Esto da error porque se reasigna el tipo de dato
console.log("Edad", edad)


