import { Request, Response, NextFunction } from "express"

interface IError extends Error {
	status?: number
}

const manejador = {
	errorCatch: (ftn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {

		return (req: Request, res: Response, next: NextFunction) => {
			ftn(req, res, next).catch(next)
		}

	},

	noEncontrado: (req: Request, res: Response, next: NextFunction) => {
		const error: IError = new Error("Página no encontrada")
		error.status = 404

		next(error)
	},
	general: (error: IError, req: Request, res: Response, next: NextFunction) => {
		const detalleError = {
			mensaje: error.message,
			status: error.status,
			pila: error.stack,
			titulo: "Ocurrió un error"
		}

		res.render("error", detalleError)
	}
}

export { manejador }