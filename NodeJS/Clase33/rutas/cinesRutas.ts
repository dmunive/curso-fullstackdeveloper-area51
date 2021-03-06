import { Request, Response, NextFunction } from "express"
import express = require("express")
import { controlador } from "../api/controladores/cinesControlador"
import { manejadorErrores } from "../errores/manejador"
import { politica } from "../api/politicas/autenticacion";

const ruteador = express.Router()

ruteador.get("/", politica, manejadorErrores.catch(controlador.listar))
ruteador.post("/", manejadorErrores.catch(controlador.insertar))
ruteador.put("/:id", manejadorErrores.catch(controlador.modificar))
ruteador.delete("/:id", manejadorErrores.catch(controlador.eliminar))


export { ruteador }