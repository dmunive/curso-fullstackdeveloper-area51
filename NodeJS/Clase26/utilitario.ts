export const saludos = (arr: Array<string>) => arr.map(item => `Hola ${item}`)

export const longitud = (cadena: string) => cadena.length

// esto es con javascript

//module.exports = {}

/*export.enMayusculas = function(cadena) {
    return cadena.toUpperCase()
}*/



/*module.exports = {
    enMayusculas : function(cadena) {
        return cadena.toUpperCase()
    }
}*/

//export.enMinusculas = cadena => cadena.toLowerCase()

/*module.exports = {
    enMayusculas : function(cadena) {
        return cadena.toUpperCase()
    },
    enMinusculas : cadena => cadena.toLowerCase()

}*/

/*module.exports = {
    saludos: function(arr) {
        return arr.map(item => `Hola ${item}`)
    },

    longitud: function(cadena) {
        return cadena.length
    }
}*/