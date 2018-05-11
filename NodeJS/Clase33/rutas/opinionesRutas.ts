import express = require("express")
import { manejadorErrores } from "../errores/manejador"
import { controlador } from "../api/controladores/opinionesControlador"

const ruteador = express.Router()

ruteador.get("/", manejadorErrores.catch(controlador.listar))
ruteador.post("/", manejadorErrores.catch(controlador.insertar))

export { ruteador }