const listaClases = ["slide04", "slide03", "slide02", "slide01", "slide05", "slide06", "slide07"]

const slides = document.getElementsByClassName("slide")

const listaSlides = Array.from(slides)

listaSlides.forEach(function (elemento, indice) {
	elemento.classList.add(listaClases[indice])
})

function mover() {
	const ultimoElemento = listaClases.pop()
	listaClases.unshift(ultimoElemento)

	listaSlides.forEach(function (elemento, indice) {
		elemento.classList.remove("slide01", "slide02", "slide03", "slide04", "slide05", "slide06", "slide07")
		elemento.classList.add(listaClases[indice])
	})
}

setInterval(mover, 1000)
//mover()