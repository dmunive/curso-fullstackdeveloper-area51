const promesaISIL = new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve("Pagó ISIL")
    }, 3000)
})

const promesaArea51 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        //resolve("Pagó Area51")
        reject("No pagó Area51")
    }, 4000)
})

const promesaAgencia = new Promise((resolve, reject) => {
    setTimeout(()=> {
        //resolve("Pagó Agencia")
        reject("No pagó Agencia")
    }, 1500)
})

Promise.all([promesaISIL, promesaArea51, promesaAgencia])
    .then(respuesta => {
        console.log(respuesta)
    })
    .catch(error => {
        console.log(error)
    })