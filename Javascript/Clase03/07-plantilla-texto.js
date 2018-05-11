const registros = [
	{
		id: 30,
		titulo: "Farmacia Universal",
		ubicacion: "Av. Sucre 657"
	},
	{
		id: 40,
		titulo: "Farmacia Salud",
		ubicacion: "Av. Del Sol 456"
	},
	{
		id: 10,
		titulo: "Farmacia Señor de Luren",
		ubicacion: "Av. Bolívar 123"
	},
	{
		id: 23,
		titulo: "Farmacia Señor de Muruhuay",
		ubicacion: "Av. Roosevelt 478"
	}
]

const tbody = document.getElementsByTagName("tbody")[0]

const pasarAAltas = titulo => titulo.toUpperCase()

const filas = registros
.sort( (a, b) => a.id > b.id)
.map( farmacia => 
	`
		<tr>
			<td>${farmacia.id}</td>
			<td>${pasarAAltas(farmacia.titulo)}</td>
			<td>${farmacia.ubicacion}</td>
		</tr>
	`
).join("")

tbody.innerHTML = filas

//console.log(filas)