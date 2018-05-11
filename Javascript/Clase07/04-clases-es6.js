class Animal {
    constructor(tipo, familia){
        this.tipo = tipo
        this.familia = familia
    }

    descripcion(){
        console.log(`Es un ${this.tipo} de la familia de los ${this.familia}`)
    }

    nombreFamilia() {
        console.log(`La familia es ${this.familia}`)
    }

    set generoFamiliar(nuevoGenero){
        this.familia = nuevoGenero
    }

    get generoFamiliar(){
        return this.familia
    }

    static info(){
        return new Date()
    }
}

const animal = new Animal("mamifero", "felinos")
animal.descripcion()
animal.nombreFamilia()
animal.generoFamiliar = "caninos"
animal.descripcion()
console.log(animal.generoFamiliar)

Animal.info()