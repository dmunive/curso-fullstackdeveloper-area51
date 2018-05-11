// Importaciones
import { Request, Response, NextFunction, Application } from "express"
import express = require("express")
import mongoose = require("mongoose")
import bodyParser = require("body-parser")
import { ruteador as cineRutas } from "../rutas/cinesRutas"
import { manejadorErrores } from "../errores/manejador"

require("dotenv").config({ path: "./variables.env" })

// Declaraciones
const app: Application = express()
app.set("puerto", process.env.PORT)

mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise
mongoose.connection.on("error", (error) => console.log(error))

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Rutas
app.use("/", cineRutas)

// Errores
app.use(manejadorErrores.noEncontrada)
app.use(manejadorErrores.general)

// Servidor
app.listen(app.get("puerto"), () => console.log(`Servidor ejecutándose en el puerto ${app.get("puerto")}`))


