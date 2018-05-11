const tokenIngresado = prompt("Por favor ingrese un token")

const refreshTokens = {
	'afkdkdk458373738389898712': 10,
	'dfddddk458373738389898712': 20,
	'nmdmddk458373738389898712': 30,
	'a686866458373738389898712': 40,
	'n647kdk458373738389898712': 50,
}

const listaUsuarios = [
	{ id: 10, nombre: "Sergio" },
	{ id: 20, nombre: "Javier" },
	{ id: 30, nombre: "Tino" },
	{ id: 40, nombre: "Ricardo" }
]

let encontrado = false
let usuario
let nombreUsuario

/*function buscarUsuario(id){
	let nombreUsuario

	for(let objUsuario of listaUsuarios) {
		if(objUsuario.id == id) {
			nombreUsuario = objUsuario["nombre"]
		}
	}
	return nombreUsuario
}*/

// buscarUsuario es una variable de tipo función (function)
/*const buscarUsuario = function (id) {
	let nombreUsuario

	for (let objUsuario of listaUsuarios) {
		if (objUsuario.id == id) {
			nombreUsuario = objUsuario["nombre"]
		}
	}
	return nombreUsuario
}*/

//const buscarUsuario = (id) => {
const buscarUsuario = id => {
	let nombreUsuario

	for (let objUsuario of listaUsuarios) {
		if (objUsuario.id == id) {
			nombreUsuario = objUsuario["nombre"]
		}
	}
	return nombreUsuario
}

for (let rf in refreshTokens) {
	if (rf === tokenIngresado) {
		usuario = refreshTokens[tokenIngresado]
		nombreUsuario = buscarUsuario(usuario)
		encontrado = true
		break
	}
	//console.log(rf)
}

console.log(encontrado)
if (encontrado) {
	alert("Nombre de usuario = " + nombreUsuario)
}
