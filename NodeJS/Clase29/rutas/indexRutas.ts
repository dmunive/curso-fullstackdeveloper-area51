import express = require("express")
import {controlador as indexControlador} from "../api/controladores/indexControlador"

const ruteador = express.Router()

ruteador.get("/", indexControlador.home)

ruteador.get("/acerca", indexControlador.acerca)

ruteador.get("/servicios", indexControlador.servicios)

export { ruteador }