const listaUsuarios = [
	{ id: 10, nombre: "Sergio" },
	{ id: 30, nombre: "Javier" },
	{ id: 15, nombre: "Tino" },
	{ id: 5, nombre: "Ricardo" }
]

const ordenados = listaUsuarios.sort( (a, b) => a.id < b.id)
console.log(ordenados)

const nombres = ordenados.map( usuario => usuario.nombre)
console.log(nombres)

const nombresOrdenados = nombres.sort( (a, b) => a > b)
console.log(nombresOrdenados)

const enBajas = nombresOrdenados.map( nombre => nombre.toLowerCase())
console.log(enBajas)

///////////////////////////////////
const nombresEnBajas = listaUsuarios
	.sort( (a, b) => a.id < b.id)
	.map( usuario => usuario.nombre)
	.sort( (a, b) => a > b)
	.map( nombre => nombre.toLowerCase())

