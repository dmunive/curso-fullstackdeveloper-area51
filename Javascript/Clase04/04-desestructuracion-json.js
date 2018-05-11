const misRedesSociales = {
    facebook: "https://facebook.com/shidalgo",
    google: "https://googleplus.com/shidalgo",
    instagram: "https://instagram.com/shidalgo"
}

const otrasRedesSociales = {
    google: "http://googleplus.com/mveliz"
}

//console.log(misRedesSociales.facebook)
//console.log(otrasRedesSociales.facebook)

const usuarios = [
    {id:"kdkdkdkkdkfj", nombre: "Sergio"},
    {id:"78dsfkdddkj", nombre: "Jana", apellido: "Merino"},
    {id:"8484ifkdfkdfk", edad: 40}
]

usuarios.forEach(elemento => {
    const {id, nombre="no existe nombre", apellido="no existe apellido", edad=0} = elemento
    console.log(id, nombre, apellido, edad)
})