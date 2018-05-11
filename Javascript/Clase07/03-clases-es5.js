function Animal(tipo, familia) {
    this.tipo = tipo
    this.familia = familia

    this.descripcion = function(){
        console.log(`Es un ${this.tipo} de la familia de los ${this.familia}`)
    }
}

Animal.prototype.nombre = function(){
    console.log("nombre")
}


const animal = new Animal("mamifero", "felinos")
animal.descripcion()
animal.nombre()