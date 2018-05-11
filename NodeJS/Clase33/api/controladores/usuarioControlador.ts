import { Request, Response, NextFunction } from "express"
import { Usuario } from "../modelos/usuarioModelo";
import { crearTokens } from "../servicios/tokens";

const controlador = {
	registro: async (req: Request, res: Response) => {
		const usuario = new Usuario({
			usuario: req.body.usuario,
			contrasena: req.body.contrasena
		})

		const datos = await usuario.save()

		const tokens = crearTokens(datos._id)

		datos.refreshToken = tokens.refreshToken
		await datos.save()

		res.json(tokens)
	},

	login: async (req: Request, res: Response) => {
		const usuario = await Usuario.findOne({
			usuario: req.body.usuario.toLowerCase(),
			contrasena: req.body.contrasena
		})

		const tokens = crearTokens(usuario._id)
		tokens.refreshToken = usuario.refreshToken

		res.json(tokens)
	},

	generarNuevoAccessToken: async (req: Request, res: Response) => {
		const refreshToken = req.body.refreshToken

		const usuario = await Usuario.findOne({ refreshToken })

		const tokens = crearTokens(usuario._id)
		tokens.refreshToken = usuario.refreshToken

		res.json(tokens)
	}
}

export { controlador }