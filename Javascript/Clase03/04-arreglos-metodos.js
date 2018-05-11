const nombres = ["Jana", "Andrea", "Aurora", "Fernanda"]

/*const enAltas = nombres.map(function(item, indice){
	return item.toUpperCase()
})*/

/*const enAltas = nombres.map( (item, indice) => {
	return item.toUpperCase()
})*/

// const enAltas = nombres.map( (item) => item.toUpperCase() )

// Map crea (o devuelve un arreglo nuevo)
const enAltas = nombres.map( item => item.toUpperCase() )

console.log(enAltas)
console.log(nombres)

const edades = [ 10, 20, 35, 47, 60, 86, 100]

const existenMenoresEdad = edades.some( edad => edad < 18)
console.log(existenMenoresEdad)

const todosSonJovenes = edades.every( edad => edad <= 47 )
console.log(todosSonJovenes)

const hayAlguienViejo = edades.some( edad => edad > 60)
console.log(hayAlguienViejo)

const todosLosViejos = edades.filter( edad => edad > 60)
console.log("Todos los viejos", todosLosViejos)

const nombresOrdenados = nombres.sort( (a, b) => a < b)
console.log(nombresOrdenados)

const listaUsuarios = [
	{ id: 10, nombre: "Sergio" },
	{ id: 30, nombre: "Javier" },
	{ id: 15, nombre: "Tino" },
	{ id: 5, nombre: "Ricardo" }
]

const listaOrdenada = listaUsuarios.sort( (a, b) => a.id > b.id)

console.log(listaOrdenada)