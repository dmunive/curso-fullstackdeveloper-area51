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

for(let farmacia in registros) {
	console.log(farmacia)
}

const tokenIngresado = prompt("Por favor ingrese un token")

const refreshTokens = {
	'afkdkdk458373738389898712': 10,
	'dfddddk458373738389898712': 20,
	'nmdmddk458373738389898712': 30,
	'a686866458373738389898712': 40,
	'n647kdk458373738389898712': 50,
}

const listaUsuarios = [
	{id: 10, nombre: "Sergio"},
	{id: 20, nombre: "Javier"},
	{id: 30, nombre: "Tino"},
	{id: 40, nombre: "Ricardo"}
]

let encontrado = false
let usuario
let nombreUsuario

for(let rf in refreshTokens) {
	if(rf==tokenIngresado) {
		usuario = refreshTokens[tokenIngresado]
		for(let objUsuario of listaUsuarios) {
			if(objUsuario.id == usuario) {
				nombreUsuario = objUsuario["nombre"]
			}
		}
		encontrado = true
		break
	}
	//console.log(rf)
}

console.log(encontrado)
if(encontrado){
	alert("Nombre de usuario = " + nombreUsuario)
}
