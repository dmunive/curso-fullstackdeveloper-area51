const cantidades = [30, 40, 50, 33, 56, 100, 23, 88]

let total = 0

cantidades.forEach(elemento => {
    total += elemento
})

const suma = cantidades.reduce( (acumulador, elemento, indice) => {
    acumulador += elemento

    return acumulador

    /*
        acumulador = 0
        acumulador = 0 + 30
        acumulador = 30 + 40
        acumulador = 70 + 50
        ...
    */
}, 0)

console.log(suma)

const cursos = ["angular", "node", "javascript", "node", "angular", "phaser", "nativescript", "angular", "ionic"]

const lista = cursos.reduce((acumulador, elemento) => {
    /*if(acumulador[elemento]==undefined) {
        acumulador[elemento] = 1
    } else {
        acumulador[elemento] += 1
    }*/

    //acumulador[elemento] ? acumulador[elemento] += 1 : acumulador[elemento] = 1

    acumulador[elemento] = acumulador[elemento] ? acumulador[elemento]+1  : 1

    return acumulador
}, {})

console.log(lista)

const misArreglos = [ [1, 2, 3, 4], ["a", "b", "c"], [5, 6, 7, 8]]

const resultado = misArreglos
                    .reduce( (acumulador, elemento) => {
                        acumulador = acumulador.concat(elemento)
                        //console.log(acumulador)
                        return acumulador

                        // acumulador = [1,2,3,4]
                        // acumulador = [1,2,3,4,"a","b","c"]
                        // acumulador = [1,2,3,4,"a","b","c",5,6,7,8]
                    }, [])
                    //.filter(elemento => isNaN(elemento) == false)
                    .filter(elemento => !isNaN(elemento))
                    .map(elemento => Math.pow(elemento, 2))

    console.log(resultado)


// [1, 4, 9, 16, 25, 36, 49, 64]