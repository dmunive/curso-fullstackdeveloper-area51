const promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("El cliente pidió un plato")
    }, 4000)
})

promesa
    .then( msg => {
        console.log(msg)
        // Promesa del cocinero
        const promesaCocinero = new Promise((resolve, reject) =>{
            setTimeout(()=>{
                reject("El cocinero falló")
                //resolve("El cocinero entregó el plato")
            }, 1500)
        })

        return promesaCocinero
    })
    .then( msg => {
        console.log(msg)
        // Promesa del cliente
        const promesaCliente = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve("El cliente pagó")
            }, 2800)
        })

        return promesaCliente
    })
    .then( msg => {
        console.log(msg)
    })
    .catch( error => {
        console.log(error)
    })
    .catch( error => {
        console.log("se ejecutó el 2do catch")
    })