class Animal {
    constructor(tipo){
        this.tipo = tipo
    }

    descripcion(){
        return `Es un animal de tipo ${this.tipo}`
    }
}

class Perro extends Animal {
        constructor(tipo, familia){
            super(tipo)
            this.familia = familia
        }

        nombreFamilia(){
            return this.familia
        }

        descripcion(){
            const mensaje = super.descripcion()
            return `Datos enviados: ${mensaje}`
        }
}

const perro = new Perro("mamifero", "caninos")
console.log(perro.nombreFamilia())
console.log(perro.descripcion())