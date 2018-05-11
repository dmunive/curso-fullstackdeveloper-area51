import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
    nombre: String,
    descripcion: String
})

const Curso = mongoose.model("curso", esquema)

export { Curso }