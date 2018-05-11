import { Request, Response, NextFunction, Application } from "express"
import express = require("express")
import { controlador as indexCtrl } from "../api/controladores/indexControlador"
import { manejador } from '../errores/manejador'

const ruteador = express.Router()

ruteador.get("/", indexCtrl.home)
ruteador.get("/agregar", indexCtrl.agregar)
ruteador.post("/agregar", manejador.errorCatch(indexCtrl.insertar))
ruteador.post("/agregar/:id", manejador.errorCatch(indexCtrl.actualizar))
ruteador.get("/cines", manejador.errorCatch(indexCtrl.listado))
ruteador.get("/editar/:id", manejador.errorCatch(indexCtrl.editar))
ruteador.get("/generos", manejador.errorCatch(indexCtrl.listadoGenerosCines))
ruteador.get("/generos/:genero", manejador.errorCatch(indexCtrl.listadoGenerosCines))

export { ruteador }