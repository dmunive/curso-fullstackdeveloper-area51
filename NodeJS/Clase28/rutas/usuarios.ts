import express = require("express")
import {Request, Response, NextFunction} from "express"
import {controlador} from '../api/controladores/usuariosControlador'

const ruteador = express.Router()

ruteador.get("/", controlador.listado)

ruteador.get("/insertar", controlador.insertar)


export {ruteador}