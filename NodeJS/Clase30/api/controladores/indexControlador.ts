import { Request, Response, NextFunction } from "express"
import { cine } from '../modelos/cine'

const controlador = {
	home: (req: Request, res: Response) => {
		res.render("home", { titulo: "Home" })
	},
	agregar: (req: Request, res: Response) => {
		res.render("editarCine", { titulo: "Agregar" })
	},
	insertar: async (req: Request, res: Response, next: NextFunction) => {
		const Cine = new cine(req.body)
		await Cine.save()
		res.redirect("/")
	}
}

export { controlador }