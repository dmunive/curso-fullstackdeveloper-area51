import express = require("express")
import { Request, Response, NextFunction } from "express"
import { controlador} from "../api/controladores/IndexControlador"

const ruteador = express.Router()

ruteador.get("/", controlador.home)
ruteador.get("/acerca", controlador.acerca)

export { ruteador }