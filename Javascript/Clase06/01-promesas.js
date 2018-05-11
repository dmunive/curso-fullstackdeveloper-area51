/* Promise es una clase de ES2015 */
console.log("Aquí inicia la programación")

/*for(let i=0; i<50000000; i++){
    if(i==(50000000-1)) {
        console.log("El cliente eligió un plato")
    }
}*/

const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // resolve("El cliente eligió un plato")
        if(Math.random()>.5) {
            resolve("El cliente eligió un plato")
        } else {
            reject("El cliente no eligió nada")
        }
        
        // console.log("El cliente eligió un plato")
    }, 4000)
})

// La función que está dentro del then se ejecuta cuando la promesa se cumplió
promesa
    .then( msg => {
        console.log(msg)
    })
    .catch( error => {
        console.log(error)
    })
/*
promesa.then((msg)=>{
    console.log(msg)
})  

promesa.catch((error)=>{
    console.log(error)
})
*/

console.log("La programación continúa")