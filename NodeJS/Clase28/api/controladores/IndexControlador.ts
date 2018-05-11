import {Request, Response, NextFunction} from "express"

const controlador = {
    home: (req: Request, res: Response, next: NextFunction) => {

        res
            .status(200)
            .type("text/html")
            .render("home", {
                titulo: "Mi Home",
                cursos: [
                    {titulo: "Angular", duracion: 48, url: "https://angular.io"},
                    {titulo: "NodeJS", duracion: 24, url: "https://nodejs.org"}
                ]
            })
    },
    acerca: (req: Request, res: Response) => {
        res
            .render("acerca")
    }
}

export {controlador}