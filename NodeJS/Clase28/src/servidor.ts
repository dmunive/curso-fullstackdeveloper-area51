// Importaciones
import express = require("express")
import { Request, Response, NextFunction } from "express"
import morgan = require("morgan")
import bodyParser = require("body-parser")
import methodOverride = require("method-override")
import {ruteador as rutaHome} from "../rutas/index"
import {ruteador as rutaUsuarios} from "../rutas/usuarios"

// Declaraciones
const app = express()
app.set("view engine", "pug")
app.set("views", "./vistas")

// Middleware
app.use(morgan("dev"))
app.use(express.static("./publico"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(methodOverride("_method"))

// Rutas
app.use("/", rutaHome)
app.use("/usuarios", rutaUsuarios)

// Servidor
app.listen(4000, () => {
    console.log("Servidor ejecutándose en el puerto 4000")
})