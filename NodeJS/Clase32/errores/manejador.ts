import { Request, Response, NextFunction } from "express"

interface IError extends Error {
	status?: number
}

const manejadorErrores = {
	catch: (ftn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
		return (rq: Request, rs: Response, nxt: NextFunction) => {
			//ftn(rq, rs, nxt).catch(error => nxt(error))
			return ftn(rq, rs, nxt).catch(nxt)
		}
	},
	noEncontrada: (req: Request, res: Response, next: NextFunction) => {
		const error: IError = new Error("Ruta no existe")
		error.status = 404

		next(error)
	},
	general: (error: IError, req: Request, res: Response, next: NextFunction) => {
		res.json({
			mensaje: error.message,
			pila: error.stack,
			estado: error.status
		})
	}
}

export { manejadorErrores }