const lista = [
	{
		titulo: "Farmacia Salamanca",
		direccion: {
			ubicacion: "Av. Los Quechuas 321",
			referencia: "Cerca al mercado"
		},
		coordenadas: {
			latitud: -12.344455,
			longitud: -77.34445
		}
	},
	{
		titulo: "Farmacia La República",
		direccion: {
			ubicacion: "Av. Miroquesada 621. Magdalena",
			referencia: "A dos cuadras de la Plaza de Armas"
		},
		coordenadas: {
			latitud: -12.36675,
			longitud: -77.234455
		}
	},
	{
		titulo: "Farmacia Salud Perú",
		direccion: {
			ubicacion: "Av. Sucre 621",
			referencia: "Espaldas de los bomberos"
		},
		coordenadas: {
			latitud: -12.455655,
			longitud: -77.38945
		}
	}
]

console.log(lista[1]) // Acceso al segundo elemento
console.log(lista.length) // Devuelve la longitud del arreglo o sea la cantidad de elementos que conforman el arreglo
console.log(lista) // Muestra el arreglo

// Métodos para agregar o quitar elementos

const nuevaSede = {
	titulo: "Farmacia Arco Iris",
	direccion: {
		ubicacion: "Av. Alcanfores 821. Miraflores",
		referencia: "A dos cuadras de Vivanda de Benavides"
	},
	coordenadas: {
		latitud: -12.3775,
		longitud: -77.234445
	}
}

lista.push(nuevaSede) // Nuevo elemento al final de la lista
console.log(lista)

const nuevaSede2 = {
	titulo: "Farmacia Falcón",
	direccion: {
		ubicacion: "Calle Mercaderes. Lima",
		referencia: "A la vuelta de El Comercio"
	},
	coordenadas: {
		latitud: -12.374475,
		longitud: -77.23334445
	}
}

lista.unshift(nuevaSede2) // Agregamos al inicio
console.log(lista)

const elementoFinalExtraido = lista.pop() // Eliminamos del final
console.log(lista)

const elementoInicialExtraido = lista.shift() // Eliminamos del inicio
console.log(lista)

const nuevaLista = lista.slice(0, 1) // Extrae desde la posición 0 hasta la posición 1 sin incluir esta última
console.log(nuevaLista)

const copia = lista.slice() // Si no usamos parámetros, hacemos una copia de lista
console.log(copia)