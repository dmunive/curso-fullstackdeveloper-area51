function* generador(){
    console.log("Paso 1")
    yield 1
    console.log("Paso 2")
    yield "texto"
    console.log("Paso 3")
}

const lista = generador()
lista.next()
lista.next()
lista.next()