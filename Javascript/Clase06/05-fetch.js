fetch("http://javascript.tibajodemanda.com/farmacia",{
    method: "get"
})
.then(respuesta => {
    return respuesta.json()
    //console.log(respuesta)
})
.then( datos => {
    console.log(datos)
})
.catch( error => {
    console.log(error)
})