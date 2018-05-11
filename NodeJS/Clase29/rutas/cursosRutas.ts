import { Request, Response} from "express"
import express = require("express")

import { controlador as cursosControlador} from "../api/controladores/cursosControlador"

const ruteador = express.Router()

ruteador.get("/listado", cursosControlador.listado)

ruteador.get("/insertar", cursosControlador.insertar)

ruteador.get("/actualizar", cursosControlador.actualizar)

ruteador.get("/eliminar", cursosControlador.eliminar)

export { ruteador }