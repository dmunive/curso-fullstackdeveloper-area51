// Importaciones
import express = require("express")
import {Application, Request, Response, NextFunction} from 'express'

// Variables
const app: Application = express()

// Middlewares
app.use("/app", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Ruta = ${req.url}`)

    if(req.method.toLowerCase() === "get"){
        next()
    } else {
        res
            .status(401)
            .type("text/plain")
            .send(`El método ${req.method} no está autorizado`)
    }
})

// npm i --save body-parser


// Rutas
app.get("/app", (req: Request, res: Response) => {
    res
        .status(200)
        .type("text/plain")
        .send("OK")
})

// Servidor
app.listen(4000, ()=> console.log("Servidor ejecutándose"))