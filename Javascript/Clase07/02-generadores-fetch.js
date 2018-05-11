function ajax(url){
    return fetch(url)
            .then(respuesta => {
                return respuesta.json()
            })
}

function* generador(){
    console.time("registros")
    ajax("http://jsonplaceholder.typicode.com/posts")
        .then(registros => {
            console.log("Registros de posts")
            console.table(registros)
            console.timeEnd("registros")
            lista.next()
        })
    yield 1
    ajax("http://jsonplaceholder.typicode.com/comments")
        .then(registros => {
            console.log("Registros de comments")
            console.table(registros)
        })
}

const lista = generador()
lista.next()