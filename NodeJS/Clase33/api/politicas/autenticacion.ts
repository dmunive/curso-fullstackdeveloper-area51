import { Request, Response, NextFunction } from "express"
import { validarAccessToken } from "../servicios/tokens";

const politica = (req: Request, res: Response, next: NextFunction) => {
	if (req.headers["authorization"]) {
		const accessToken = req.headers["authorization"].split(" ")[1]

		validarAccessToken(accessToken)
			.then(
				respuesta => {
					next(respuesta)
				}
			)
			.catch(
				mensaje => {
					res
						.status(mensaje.estado)
						.json(mensaje)
				}
			)
	}
}

export { politica }