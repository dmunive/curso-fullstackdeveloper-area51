import { Request, Response, NextFunction } from "express"
import { cine } from '../modelos/cine'

const controlador = {
	home: (req: Request, res: Response) => {
		res.render("home", { titulo: "Home" })
	},
	agregar: (req: Request, res: Response) => {
		res.render("editarCine", { titulo: "Agregar" })
	},
	editar: async (req: Request, res: Response, next: NextFunction) => {
		const detalle: any = await cine.findOne({ _id: req.params.id })
		if (!detalle) return res.redirect("back")

		res.render("editarCine", { titulo: `Editando... ${detalle.nombre}`, detalle })
	},

	actualizar: async (req: Request, res: Response, next: NextFunction) => {
		await cine.findOneAndUpdate({ _id: req.params.id }, req.body)

		res.redirect("/")
	},



	insertar: async (req: Request, res: Response, next: NextFunction) => {
		const Cine = new cine(req.body)
		await Cine.save()
		res.redirect("/")
	},

	listado: async (req: Request, res: Response) => {
		const listado = await cine.find()

		res.render("home", { titulo: "Home", listado })

	},

	listadoGenerosCines: async (req: Request, res: Response) => {
		const generos = await cine.listarGeneros()
		/*const generos = ["PRIME", "3D", "2D", "XTREME"]*/

		const filtro = req.params.genero ? { tipos: req.params.genero } : { _id: { $exists: true } }

		const listado = await cine.find(filtro)

		Promise.all([generos, listado])
			.then(
			resultados => {
				res.render("generosCines", { titulo: "Filtro por Géneros", listado: resultados[1], generos: resultados[0] })
			}
			)



	}
}

export { controlador }