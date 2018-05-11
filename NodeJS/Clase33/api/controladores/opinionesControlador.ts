import { Request, Response, NextFunction } from "express"
import { Opiniones } from "../modelos/opinionesModelo"

const controlador = {
	insertar: async (req: Request, res: Response) => {
		const opinion = new Opiniones({
			texto: req.body.texto,
			cine: req.body.cine
		})

		await opinion.save()

		res.send("Todo ok")
	},

	listar: async (req: Request, res: Response) => {
		const opiniones = await Opiniones.find() //.populate("cine")
		// console.log(opiniones)
		const lista = opiniones.map(item => {
			delete item.cine["ubicacion"]
			delete item.cine.caracteristicas
			return item
		})

		res.json(lista)
	}
}

export { controlador } 