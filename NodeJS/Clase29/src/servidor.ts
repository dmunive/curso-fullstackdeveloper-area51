// Importaciones
import { Application, Request, Response, NextFunction } from "express"
import { ruteador as rutasIndex } from "../rutas/indexRutas"
import { ruteador as rutasCursos } from "../rutas/cursosRutas"
import { conexionMongo } from "../config/conexiones"
import express = require("express")
import bodyParser = require("body-parser")
import methodOverride = require("method-override")
import morgan = require("morgan")
import mongoose = require("mongoose")
import favicon = require("serve-favicon")


require("dotenv").config({ path: "./variables.env"})

// Variables
const app: Application = express()
app.set("PUERTO", process.env.PUERTO || 4000)
app.set("view engine", "pug")
app.set("views", "./vistas")

mongoose.Promise = global.Promise
mongoose.connect(conexionMongo, error => {
    if(error) {
        console.log(error)
    } else {
        console.log("Conectado a Mongo")
    }
})


// Middlewares
app.use(favicon("./favicon.ico"))
app.use(express.static("./publico"))


// Rutas
app.use((req: Request, res: Response, next: NextFunction) => {
    res.locals.tituloWebSite = "Título del Sistema de Ejemplo"

    next()
})

app.use("/", rutasIndex)
app.use("/cursos", rutasCursos)

// Servidor
app.listen(app.get("PUERTO"), ()=>{
    console.log(`Servidor ejecutándose en el puerto ${app.get("PUERTO")}`)
})