import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true
	},

	ubicacion: {
		coordenadas: [
			{
				type: Number,
				required: true
			}
		],
		ubigeo: {
			type: Number,
			required: true
		}
	},

	caracteristicas: [{ type: String, required: true }]
})

const Cine = mongoose.model("Cine", esquema)

export { Cine }

