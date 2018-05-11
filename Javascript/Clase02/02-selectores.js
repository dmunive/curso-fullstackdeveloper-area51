const listaDiv = document.getElementsByTagName("div") // Selecciona los elementos por su nombre de etiqueta

console.log(listaDiv)
console.log(listaDiv[0])

const primerElemento = document.getElementsByTagName("div")[0]

const listaClase = document.getElementsByClassName("datos") // Selecciona elementos por su clase
console.log(listaClase)

const elementoID =document.getElementById("titulo")
console.log(elementoID)

const smallRojo = document.querySelector("small.rojo")
console.log(smallRojo)

const todosSmallRojo = document.querySelectorAll("small.rojo")
console.log(todosSmallRojo)

const amarillo = document.querySelectorAll(".amarillo")

const blockquoteRojoAmarillo = document.querySelector("blockquote.amarillo.rojo")

const hijos = document.querySelectorAll("body > div")








