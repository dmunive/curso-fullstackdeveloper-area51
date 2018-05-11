// Importaciones
import express = require("express")
import { Application, Request, Response } from "express";
import bodyParser = require("body-parser")
import { urlencoded } from "body-parser";

// Variables
const app: Application = express()

// Middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/", (req: Request, res: Response) => {
    res
        .status(200)
        .type("text/plain")
        .send("Respuesta desde la ruta inicial")
})

app.get("/usuario/edicion/:id/:colegio", (req: Request, res: Response) => {

    const idUsuario: number = req.params.id
    const colegio: string = req.params.colegio

    const rol = req.query.rol
    const nivel = req.query.nivel

    res
        .status(200)
        .type("text/plain")
        .send(`
            ID = ${idUsuario}
            Colegio = ${colegio}
            Rol = ${rol}
            Nivel = ${nivel}
        `)
})

app.post("/auth/login", (req: Request, res: Response) => {
    console.log(req.body)
    //const usuario = req.body.usuario
    //const password = req.body.contrasena

    const datos = req.body

    /*res
        .status(200)
        .type("application/json")
        .send({usuario, contrasena: password})*/
    res
        .status(200)
        .json(datos)
        //.json({usuario, contrasena: password})
})


// Servidor
app.listen(4000, ()=> console.log("Servidor ejecutándose en el puerto 4000"))


