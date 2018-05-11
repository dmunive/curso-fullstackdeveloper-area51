import { Request, Response, NextFunction } from "express"
import { Cine } from "../modelos/cinesModelo"

const controlador = {
	listar: async (req: Request, res: Response) => {
		console.log("listar")
		const registros = await Cine.find()
		res.json(registros)
		/*const promesaCines = Cine.find()
		const promesasUbigeo = Ubigeo.find()

		await Promise.all([promesasCines, promesasUbigeo])*/

		//res.send("Listado de cines")
	},

	insertar: async (req: Request, res: Response) => {
		/*const registro = new Cine(req.body)
		await registro.save()*/

		await (new Cine(req.body)).save()

		res.json({ status: 200 })
	},

	modificar: async (req: Request, res: Response) => {
		const _id = req.params.id

		const registro = await Cine.findOneAndUpdate({ _id: _id }, req.body, { new: true })

		res.json(registro)
	},

	eliminar: async (req: Request, res: Response) => {
		const _id = req.params.id

		await Cine.findOneAndRemove({ _id: _id })

		res.json({ status: 200 })
	}
}

export { controlador }