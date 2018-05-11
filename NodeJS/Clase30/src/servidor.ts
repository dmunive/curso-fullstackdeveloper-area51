// Importaciones
import { Request, Response, NextFunction, Application } from "express"
import express = require("express")
import { ruteador as indexRutas } from '../rutas/indexRutas'
import { manejador as manejadorErrores } from "../errores/manejador"
import mongoose = require("mongoose")
import bodyParser = require("body-parser")

require("dotenv").config({ path: "./variables.env" }) // lee las variables de entorno desde el archivo "variables.env"

mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise
mongoose.connection.on("error", error => {
	console.log(error)
})

// Declaraciones y variables
const app: Application = express()

app.set("view engine", "pug")
app.set("views", "./vistas")

// Middlewares
app.use(express.static("./publico"))
// app.use(express.static(__dirname + "/publico"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// Rutas
app.use("/", indexRutas)

// Manejo de errores
app.use(manejadorErrores.noEncontrado)
app.use(manejadorErrores.general)


// Servidor
app.listen(process.env.PORT, () => console.log(`Servidor ejecutándose en el puerto ${process.env.PORT}`))