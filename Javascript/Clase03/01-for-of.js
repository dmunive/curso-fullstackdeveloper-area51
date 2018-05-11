const registros = [
	{
		id: 10,
		titulo: "Farmacia Universal",
		ubicacion: "Av. Sucre 657"
	},
	{
		id: 20,
		titulo: "Farmacia Salud",
		ubicacion: "Av. Del Sol 456"
	},
	{
		id: 30,
		titulo: "Farmacia Señor de Luren",
		ubicacion: "Av. Bolívar 123"
	},
	{
		id: 40,
		titulo: "Farmacia Señor de Muruhuay",
		ubicacion: "Av. Roosevelt 478"
	}
]

const tbody = document.getElementsByTagName("tbody")[0]
let filas = ""

for(let farmacia of registros) {
	filas = filas + "<tr>"
	filas = filas + "<td>" + farmacia.id + "</td>"
	filas = filas + "<td>" + farmacia.titulo + "</td>"
	filas = filas + "<td>" + farmacia.ubicacion + "</td>"
	filas = filas + "</tr>"
	//console.log(farmacia)
}

tbody.innerHTML = filas

//console.log(filas)