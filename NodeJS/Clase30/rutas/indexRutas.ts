import { Request, Response, NextFunction, Application } from "express"
import express = require("express")
import { controlador as indexCtrl } from "../api/controladores/indexControlador"
import { manejador } from '../errores/manejador'

const ruteador = express.Router()

ruteador.get("/", indexCtrl.home)
ruteador.get("/agregar", indexCtrl.agregar)
ruteador.post("/agregar", manejador.errorCatch(indexCtrl.insertar))

export { ruteador }