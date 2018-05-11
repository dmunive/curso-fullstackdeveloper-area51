import { Request, Response, NextFunction} from "express"

const controlador = {
    listado: (req: Request, res: Response) => {
        res
            .render("listadoUsuarios")
    },
    insertar: (req: Request, res: Response) => {
        res
            .render("insertarUsuario")
    }
}

export {controlador}