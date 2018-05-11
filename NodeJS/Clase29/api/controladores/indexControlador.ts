import { Request, Response } from "express"

const controlador = {
    home: (req: Request, res: Response) => {
        res.render("home")
    },

    acerca: (req: Request, res: Response) => {
        res.render("acerca")
    },

    servicios: (req: Request, res: Response) => {
        res.render("servicios")
    }
}

export { controlador }