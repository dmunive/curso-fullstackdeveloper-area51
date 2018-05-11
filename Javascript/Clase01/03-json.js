const persona = {nombre: "Sergio", edad: 40}
persona.nombre = "Javier"

console.log(persona.nombre)

persona.apellido = "Hidalgo"
// persona = {nombre: "Sergio", edad: 40, apellido: "Hidalgo"}

persona = {nombre: "Sergio", edad: 40} //Aquí da error porque se está reasignando el tipo de dato