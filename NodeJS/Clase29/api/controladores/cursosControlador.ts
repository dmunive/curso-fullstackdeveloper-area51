import { Request, Response } from "express"
import express = require("express")
import { Curso } from "../modelos/curso.modelo"

const controlador = {
    listado: (req: Request, res: Response) => {
        Curso
            .find({})
            .then(
                registros => {
                    res.render("cursosListado", {registros})
                }
            )
            .catch(error => {
                console.log(error)
                res
                    .status(500)
                    .type("text/plain")
                    .send(error)
            })

        
    },
    actualizar: (req: Request, res: Response) => {
        res.render("cursosActualizar")
    },
    eliminar: (req: Request, res: Response) => {
        res.render("cursosEliminar")
    },
    insertar: (req: Request, res: Response) => {
        const curso= new Curso()

        console.log("insertar")

        curso["nombre"] = "Javascript"
        curso["descripcion"] = "Curso de Javascript ES2015"

        curso
            .save()
            .then(
                respuesta => {
                    res.render("cursosInsertar")
                }
            )
            .catch(
                error => {
                    console.log(error)
                    res
                        .status(500)
                        .type("text/plain")
                        .send("Ocurrió un error")
                }
            )

        
    }
}

export { controlador }
